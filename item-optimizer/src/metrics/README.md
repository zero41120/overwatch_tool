# Metrics System

This directory contains the **Computed Metrics** definitions. Metrics are the core of the theorycrafting engine—they define how raw item stats (like Weapon Power or Attack Speed) translate into meaningful gameplay outputs (like "Mediblaster Sustain DPS" or "Torpedo Burst Damage").

The system is designed for **Metric Editors** and **Theorycrafters** to:
1.  **Add new calculations** for heroes, weapons, or abilities.
2.  **Adjust damage formulas** as the game receives patches.
3.  **Expose new optimization targets** without needing to understand the core optimizer logic.

## 🚀 Getting Started

The system automatically discovers any class extending `ComputedMetric` exported from a file in this directory. You do not need to register your metric manually.

### 1. Create a New File
Create a new TypeScript file (e.g., `MyHeroAbilityMetric.ts`) in this directory.

### 2. Define the Metric Class
Extend the `ComputedMetric` class. You must define:
- **Metadata**: `id`, `label`, `description`, and optional `hero`.
- **Inputs**: Configurable parameters for the user (e.g., "Enemy has Armor", "Accuracy %").
- **Outputs**: The values this metric calculates (e.g., "Damage", "DPS").
- **Evaluation Logic**: The `evaluate()` method that performs the math.

```typescript
import { ComputedMetric } from "./ComputedMetric";
import type { MetricContext } from "./metricContext";

export class MyAbilityMetric extends ComputedMetric<
  typeof MyAbilityMetric.inputs,
  typeof MyAbilityMetric.outputs
> {
  // Unique ID for the system
  static readonly id = "my-hero-ability";
  
  // Display name in the UI
  static readonly label = "My Ability";
  
  // Optional: Restrict this metric to specific heroes
  static readonly hero = "MyHero";

  // 1. Declare Raw Stats Needed
  // These are fetched from the current item build automatically.
  // Common keys: "WP" (Weapon Power), "AS" (Attack Speed), "AP" (Ability Power), "ma" (Max Ammo)
  static readonly inputAttributes = ["AP", "CR"] as const;

  // 2. Define User Inputs (Toggles/Sliders)
  static readonly inputs = [
    {
      id: "distance",
      label: "Distance to Target",
      type: "number",
      defaultValue: 10,
      min: 0,
      max: 50,
      description: "Distance in meters affects falloff.",
    },
    {
      id: "headshot",
      label: "Is Headshot?",
      type: "bool",
      defaultValue: false,
    }
  ] as const;

  // 3. Define Outputs (Optimization Targets)
  static readonly outputs = [
    {
      id: "damage",
      label: "Total Damage",
      unit: "burst", // 'burst', 'sustain', or 'raw'
    },
    {
      id: "dps",
      label: "DPS",
      unit: "sustain",
    }
  ] as const;

  constructor(private readonly context: MetricContext) {
    super();
  }

  // 4. Implement Calculation
  evaluate(inputs: MetricResolvedInputValues<typeof MyAbilityMetric.inputs>) {
    // Access raw stats from context
    const ap = this.context.map.get("AP") ?? 0;
    const cooldownReduction = this.context.map.get("CR") ?? 0;

    // Access user inputs
    const isHeadshot = inputs.headshot;
    
    // Perform calculation
    let damage = 100 + (ap * 0.5);
    if (isHeadshot) damage *= 2;

    return {
      damage: damage,
      dps: damage / (10 * (1 - cooldownReduction / 100))
    };
  }
}
```

## 🛠 Features & Capabilities

### Context (`this.context`)
The `MetricContext` provides the current state of the build being evaluated:
- `map`: A Map of derived stats from items (e.g., `map.get("WP")`).
- `items`: The list of items currently selected.
- `hero`: The name of the hero being optimized.

### Inputs (`static inputs`)
Define user-facing controls that appear in the "Metric Settings" UI when this metric is selected.
- **Types**: `bool` (toggle), `number` (slider/input).
- **Constraints**: `min`, `max`, `step` (for numbers).
- **Defaults**: Required for all inputs.

### Outputs (`static outputs`)
A single metric can return multiple values. For example, a gun metric might return:
- `burst`: Damage of one clip.
- `sustain`: DPS including reload time.
The user can select which output they want to optimize for in the UI.

### Optimizer Hints (`getOptimizerExtraFields`)
Advanced: If your metric logic depends on specific items being present (e.g., "If enemy has armor, we need armor penetration items"), you can guide the optimizer.

```typescript
static getOptimizerExtraFields(inputs) {
  if (inputs.enemyHasArmor) {
    return [{
      id: "armor-pen",
      combine: "max",
      itemValue: (item) => item.stats.some(s => s.type === "Armor Pen") ? 1 : 0
    }];
  }
  return [];
}
```

## 🧪 Testing
Add a test file in `__tests__/` (e.g., `MyAbilityMetric.test.ts`).
Tests should verify that:
1.  Base damage is correct.
2.  Stats like WP/AP scale the damage correctly.
3.  Inputs (toggles) change the output as expected.

See `JunoMediblasterMetric.ts` for a complete, real-world example.
