import * as settingsActions from "./actions/action-types";

export const initialState = {
  language: 'en',
  emailSuscription: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: any) => {
  switch (action.type) {
    case settingsActions.SETTINGS_LOAD: {
      const settings = action.payload.data;
      return {
        ...state,
        ...settings
      };
    }
    default:
      return state;
  }
};
