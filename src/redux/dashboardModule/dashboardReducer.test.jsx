import reducer from "./dashboardReducer";
import { NAVIGATE_DASHBOARD, NAVIGATE_SETTINGS } from './actions/action-types';

const state = {
  menuActive: ''
};

describe("on action NAVIGATE_DASHBOARD", () => {
  test("should set menuActive as dashboard", () => {
    expect(
      reducer(state, {
        type: NAVIGATE_DASHBOARD
      }),
    ).toEqual({ menuActive: 'dashboard' });
  });
});

describe("on action NAVIGATE_SETTINGS", () => {
  test("should set menuActive as dashboard", () => {
    expect(
      reducer(state, {
        type: NAVIGATE_SETTINGS
      }),
    ).toEqual({ menuActive: 'settings' });
  });
});

describe("on action NONE", () => {
  test("should set no value", () => {
    const newState = { menuActive: 'dashboard' };
    expect(
      reducer(newState, {
        type: 'NONE'
      }),
    ).toEqual(newState);
  });
});
