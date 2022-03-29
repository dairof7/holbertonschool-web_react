import rootReducer, { initialState } from "./rootReducer";

describe('Test rootReducer.js', () => {
  it('test the root reducer’s initial state', (done) => {
    const state = rootReducer(initialState, { type: "TEST" });
    expect(state).toEqual(initialState);
    done();
  });
});