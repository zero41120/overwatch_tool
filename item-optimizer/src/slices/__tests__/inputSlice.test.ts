import reducer, {
  setHero,
  toggleHeroPower,
  clearHeroPowers,
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
  setEquipped,
  toggleEquippedEnabled,
  toggleUseOverrides,
  bumpOverrideVersion,
  importState,
  setMetricInputValue,
  clearMetricInputValue,
  clearMetricInputsForMetric,
} from "../inputSlice";

const initialState = reducer(undefined, { type: "init" } as any);

test("setHero updates hero field", () => {
  const baseState = reducer(initialState, toggleHeroPower("Ready"));
  const state = reducer(baseState, setHero("Reaper"));
  expect(state.hero).toBe("Reaper");
  expect(state.heroPowers).toHaveLength(0);
});

test("toggleHeroPower enforces max selection", () => {
  let state = reducer(initialState, toggleHeroPower("One"));
  state = reducer(state, toggleHeroPower("Two"));
  state = reducer(state, toggleHeroPower("Three"));
  state = reducer(state, toggleHeroPower("Four"));
  state = reducer(state, toggleHeroPower("Five"));
  expect(state.heroPowers).toEqual(["One", "Two", "Three", "Four"]);
  state = reducer(state, toggleHeroPower("Two"));
  expect(state.heroPowers).toEqual(["One", "Three", "Four"]);
});

test("clearHeroPowers resets selection", () => {
  const baseState = reducer(initialState, toggleHeroPower("One"));
  const state = reducer(baseState, clearHeroPowers());
  expect(state.heroPowers).toHaveLength(0);
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

test("toggleEquippedEnabled toggles flag and clears items when disabling", () => {
  let state = reducer(initialState, toggleEquippedEnabled());
  expect(state.equippedEnabled).toBe(true);
  state = reducer(state, setEquipped({ index: 0, id: "item1" }));
  state = reducer(state, toggleEquippedEnabled());
  expect(state.equippedEnabled).toBe(false);
  expect(state.equipped).toEqual(["", ""]);
});

test("toggleUseOverrides flips boolean", () => {
  const state = reducer(initialState, toggleUseOverrides());
  expect(state.useOverrides).toBe(false);
});

test("bumpOverrideVersion increments counter", () => {
  const state = reducer(initialState, bumpOverrideVersion());
  expect(state.overrideVersion).toBe(1);
});

test("metric input actions set and clear values", () => {
  let state = reducer(
    initialState,
    setMetricInputValue({ metricId: "demo", inputId: "enabled", value: true }),
  );
  expect(state.metricInputs.demo.enabled).toBe(true);
  state = reducer(
    state,
    setMetricInputValue({ metricId: "demo", inputId: "multiplier", value: 2 }),
  );
  expect(state.metricInputs.demo.multiplier).toBe(2);
  state = reducer(state, clearMetricInputValue({ metricId: "demo", inputId: "enabled" }));
  expect(state.metricInputs.demo.enabled).toBeUndefined();
  state = reducer(state, clearMetricInputsForMetric("demo"));
  expect(state.metricInputs.demo).toBeUndefined();
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

test("importState supports legacy heroPower field", () => {
  const payload = {
    ...initialState,
    hero: "Tracer",
    heroPowers: [],
    heroPower: { hero: "Tracer", name: "Blink Boosts" },
  } as any;
  const state = reducer(initialState, importState(payload));
  expect(state.heroPowers).toEqual(["Blink Boosts"]);
});
