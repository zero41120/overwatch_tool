import reducer, { setHero, addAvoid, removeAvoid, addWeightRow, setWeightType } from '../inputSlice';

const initialState = reducer(undefined, { type: 'init' } as any);

test('setHero updates hero field', () => {
  const state = reducer(initialState, setHero('Reaper'));
  expect(state.hero).toBe('Reaper');
});

test('addAvoid and removeAvoid modify avoid list', () => {
  let state = reducer(initialState, addAvoid('item1'));
  expect(state.avoid).toContain('item1');
  state = reducer(state, removeAvoid('item1'));
  expect(state.avoid).not.toContain('item1');
});

test('addWeightRow and setWeightType modify weights', () => {
  let state = reducer(initialState, addWeightRow('WP'));
  expect(state.weights.at(-1)).toEqual({ type: 'WP', weight: 1 });
  state = reducer(state, setWeightType({ index: 0, type: 'AP' }));
  expect(state.weights[0].type).toBe('AP');
});
