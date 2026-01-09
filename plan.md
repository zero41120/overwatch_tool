# Mediblaster Pareto-Frontier Optimization Plan

This plan.md is the canonical reference for the Mediblaster Pareto-Frontier
Optimization work; refer back to this file as the source of truth when
implementing, testing, or reviewing the change.

## 1. Objective

Replace the current greedy DFS heuristic with a Pareto-Frontier Dynamic
Programming approach. This solves the "linear score" deficiency by preserving
diverse stat profiles (WP, AS, WM, MA) throughout the search, deferring the
non-linear Mediblaster DPS calculation until the final set of valid candidates
is generated.

## 2. Data Preparation

- Inputs: candidates (Item Array), budget (Integer), maxItems (Fixed: 6).
- Coordinate Compression (Cost):
  - step = 250 (Greatest Common Divisor of item prices).
  - scaled_budget = floor(budget / step).
  - Item prices map to scaled_price = ceil(item.price / step).
- Stat Profile Definition:
  - Define a lightweight object StatProfile to track accumulators for
    non-linear calculation:
    - WP (Weapon Power)
    - AS (Attack Speed)
    - WM (Weapon Multiplier)
    - MA (Magazine/Ammo)
    - ID_Set (Bitmask or Array to track used item IDs for reconstruction).

## 3. DP State Definition

- Table Structure: dp[k][w]
  - k: Item Count (0 to 6).
  - w: Scaled Cost (0 to scaled_budget).
- Cell Value: List<StatProfile> (The Pareto Frontier).
  - Stores all valid StatProfile objects reachable at exactly k items and cost w
    that are not dominated by another profile in the same cell.
- Initialization:
  - dp[0][0] = [{ WP:0, AS:0, WM:0, MA:0, ID_Set: [] }].
  - All other cells initialized as empty lists.

## 4. Domination & Pruning Logic

To prevent combinatorial explosion, apply Pareto Pruning upon every insertion
into a cell.

Definition:
Profile A dominates Profile B if and only if:

assumption: DPS monotonically increases with these stats.

Insertion Logic:

- When attempting to add a candidate profile P_{new} to a list:
  - If P_{new} is dominated by any existing profile in the list → Discard P_{new}.
  - If P_{new} dominates any existing profiles in the list → Remove the dominated
    profiles, then Add P_{new}.
  - If neither applies → Add P_{new} (it represents a unique, valid tradeoff).

## 5. Algorithm Execution

Iterate through every valid item i in candidates:

- Extract Item Data: stats (WP_i, AS_i, …) and cost (C_i = scaled_price).
- Iterate Count k: From maxItems down to 1.
- Iterate Cost w: From scaled_budget down to cost.
- State Transition:
  - Access source list: source_profiles = dp[k-1][w - cost].
  - For each prof in source_profiles:
    - Create new_prof:
      - Sum stats: prof.WP + stats.WP, etc.
      - Update path: prof.ID_Set + item.id.
    - Insert & Prune new_prof into target list dp[k][w] using logic from
      Section 4.

## 6. Finalization & Output

- Collect Candidates: Aggregate all StatProfiles from all valid end-states
  (rows 1..6, all valid columns w).
- Calculate DPS: Pass each surviving StatProfile into the Mediblaster formula
  (computeMediblasterOutputFromMap).
- Select Best: Return the item set corresponding to the profile with the highest
  calculated DPS.

## 7. Complexity & Constraints

- Time Complexity: O(N × K × W × F^2)
  - N=150 items.
  - K=6 slots.
  - W ≈ 350 cost buckets.
  - F ≈ 20 (Estimated average frontier size after pruning).
  - Est. Operations: ~50M - 100M (Safe for synchronous execution < 500ms).
- Safety Valve: If runtime exceeds threshold, cap F (list size per cell) to the
  top 20 profiles sorted by a naive linear heuristic (sum of stats).

## 8. Verification Unit Test Case

Use this specific test case to validate that the new algorithm solves the
"Greedy Pruning" defect.

### A. Test Objective

Prove that Pareto-Frontier DP identifies high-value synergies that are invisible
to a Greedy/Sorting algorithm.

### B. The Simplified Model

To isolate the logic, use a generic non-linear DPS formula for this test only:

- Constraints: Budget = 10, MaxItems = 2
- Pruning Condition (to simulate failure): The failing algorithm sorts items by
  individual DPS and only keeps the Top 3 items for consideration.

### C. The Dataset (Item Pool)

| Item ID | Cost | WP (Power) | AS (Speed) | Individual DPS (WP * AS) | Rank (by Individual Score) |
|---|---|---|---|---|---|
| Item A | 5 | 10 | 1 | 10 | #1 (Keep) |
| Item B | 5 | 10 | 1 | 10 | #2 (Keep) |
| Item C | 5 | 10 | 1 | 10 | #3 (Keep) |
| Item D | 5 | 1 | 8 | 8 | #4 (Pruned by Greedy) |

### D. Execution Walkthrough

1. Greedy / Linear Algorithm (The Failure)
   - Step 1: Sorts items by Individual DPS.
   - Step 2: Selects Top 3 candidates: [Item A, Item B, Item C]. Item D is
     discarded because 8 < 10.
   - Step 3: Finds best combination from candidates.
     - Best Combo: Item A + Item B
     - Stats: WP = 10+10 = 20, AS = 1+1 = 2
     - Result: 20 × 2 = 40 DPS
2. Pareto-Frontier DP (The Success)
   - Step 1: Processes all items. Item D is not discarded because it represents
     a unique stat profile (Low WP / High AS).
   - Step 2: In the DP state for Cost=10, Count=2, it evaluates the combination
     Item A + Item D.
     - Stats: WP = 10+1 = 11, AS = 1+8 = 9
     - Result: 11 × 9 = 99 DPS

### E. Pass Criteria

The unit test must assert that the algorithm returns a score of 99 (selecting
Item A + Item D). If it returns 40, the optimization logic is still behaving
linearly and the test has FAILED.
