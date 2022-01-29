import { configureStore } from '@reduxjs/toolkit';
import userReducer from './modules/userModule/userReducer';
import dashBoardReducer from './modules/dashboardModule/dashboardReducer';
import settingsReducer from './modules/settingsModule/settingsReducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    dashBoard: dashBoardReducer,
    settings: settingsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

