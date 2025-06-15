import reducer, {
  setHero,
  addAvoid,
  removeAvoid,
  toggleAvoidEnabled,
  addWeightRow,
  setWeightType,
  toggleMinValueEnabled,
  addMinGroup,
  setMinGroupValue,
  addAttrToGroup,
  removeAttrFromGroup,
  removeMinGroup,
  addEquippedSlot,
  removeEquippedSlot,
  importState,
} from "../inputSlice";

const initialState = reducer(undefined, { type: "init" } as any);

test("setHero updates hero field", () => {
  const state = reducer(initialState, setHero("Reaper"));
  expect(state.hero).toBe("Reaper");
});

test("addAvoid and removeAvoid modify avoid list", () => {
  let state = reducer(initialState, addAvoid("item1"));
  expect(state.avoid).toContain("item1");
  state = reducer(state, removeAvoid("item1"));
  expect(state.avoid).not.toContain("item1");
});

test("addWeightRow and setWeightType modify weights", () => {
  let state = reducer(initialState, addWeightRow("WP"));
  expect(state.weights.at(-1)).toEqual({ type: "WP", weight: 1 });
  state = reducer(state, setWeightType({ index: 0, type: "AP" }));
  expect(state.weights[0].type).toBe("AP");
});

test("toggleMinValueEnabled adds default group and switches boolean", () => {
  const state = reducer(initialState, toggleMinValueEnabled());
  expect(state.minValueEnabled).toBe(true);
  expect(state.minAttrGroups).toHaveLength(1);
  expect(state.minAttrGroups[0]).toEqual({
    attrs: ["Health", "Armor", "Shield"],
    value: 50,
  });
});

test("toggleAvoidEnabled switches boolean", () => {
  const state = reducer(initialState, toggleAvoidEnabled());
  expect(state.avoidEnabled).toBe(true);
});

test("min attribute group reducers modify groups", () => {
  let state = reducer(initialState, addMinGroup());
  expect(state.minAttrGroups).toHaveLength(1);
  state = reducer(state, setMinGroupValue({ index: 0, value: 5 }));
  expect(state.minAttrGroups[0].value).toBe(5);
  state = reducer(state, addAttrToGroup({ index: 0, attr: "AP" }));
  expect(state.minAttrGroups[0].attrs).toContain("AP");
  state = reducer(state, removeAttrFromGroup({ index: 0, attr: "AP" }));
  expect(state.minAttrGroups[0].attrs).not.toContain("AP");
  state = reducer(state, removeMinGroup(0));
  expect(state.minAttrGroups).toHaveLength(0);
});

test("addEquippedSlot and removeEquippedSlot modify equipped array", () => {
  let state = reducer(initialState, addEquippedSlot());
  expect(state.equipped).toHaveLength(3);
  state = reducer(state, removeEquippedSlot(2));
  expect(state.equipped).toHaveLength(2);
});

test("importState replaces entire state", () => {
  const newState = {
    ...initialState,
    hero: "Tracer",
    cash: 5000,
  };
  const state = reducer(initialState, importState(newState));
  expect(state.hero).toBe("Tracer");
  expect(state.cash).toBe(5000);
});
