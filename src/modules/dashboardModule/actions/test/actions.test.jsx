import { NAVIGATE_DASHBOARD, NAVIGATE_SETTINGS } from '../action-types';
import { navigateDashboard, navigateSettings } from '../dashboardActions';

describe("navigateDashboard", () => {
  const action = navigateDashboard();
  it("has type NAVIGATE_DASHBOARD", () => {
    expect(action.type).toEqual(NAVIGATE_DASHBOARD);
  });
});

describe("navigateSettings", () => {
  const action = navigateSettings();
  it("has type NAVIGATE_SETTINGS", () => {
    expect(action.type).toEqual(NAVIGATE_SETTINGS);
  });
});