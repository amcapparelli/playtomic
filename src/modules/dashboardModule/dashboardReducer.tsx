import * as dashboardActions from "./actions/action-types";
import { menuNavigation } from '../../constants/menuNavigation';

export const initialState = {
  menuActive: 'dashboard'
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: any) => {
  switch (action.type) {
    case dashboardActions.NAVIGATE_SETTINGS: {
      return {
        ...state,
        menuActive: menuNavigation.SETTINGS
      };
    }
    case dashboardActions.NAVIGATE_DASHBOARD: {
      return {
        ...state,
        menuActive: menuNavigation.DASHBOARD
      };
    }
    default:
      return state;
  }
};
