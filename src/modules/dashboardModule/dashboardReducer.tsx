// import * as userActions from "./actions/action-types";

export const initialState = {
  matches: {
    played: 0,
    won: 0,
    lost: 0
  },
  ranking: 0,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: any) => {
  switch (action.type) {
    // case userActions.USER_LOAD: {
    //   const user = action.payload;
    //   return {
    //     ...state,
    //     ...user
    //   };
    // }
    default:
      return state;
  }
};
