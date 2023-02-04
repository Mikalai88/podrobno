import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test("Collapsed should be true", () => {
    //data
    const state: StateType = {
        collapsed: false
    }
    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expectation
    expect(newState.collapsed).toBe(true);
})

test("Collapsed should be false", () => {
    //data
    const state: StateType = {
        collapsed: true
    }
    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expectation
    expect(newState.collapsed).toBe(false);
})

test("Collapsed should be Error", () => {
    //data
    const state: StateType = {
        collapsed: false
    }
    //action
    //expectation
    expect(() => {
        reducer(state, {type: "FAKE-TYPE"})
    }).toThrowError();
})