import * as userActions from "./actions/action-types";

export const initialState = {
  isLogged: false,
  name: '',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: any) => {
  switch (action.type) {
    case userActions.USER_LOAD: {
      const user = action.payload;
      return {
        ...state,
        ...user
      };
    }
    default:
      return state;
  }
};
