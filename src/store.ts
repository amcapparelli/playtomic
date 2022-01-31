import { configureStore } from '@reduxjs/toolkit';
import userReducer from './redux/userModule/userReducer';
import dashBoardReducer from './redux/dashboardModule/dashboardReducer';
import settingsReducer from './redux/settingsModule/settingsReducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    dashBoard: dashBoardReducer,
    settings: settingsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

