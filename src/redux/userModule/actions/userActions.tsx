import { USER_LOAD, LOGOUT } from "./action-types";
import { User } from '../../../types';

export const userLoad = (userInfo: User) => ({
  type: USER_LOAD,
  payload: userInfo
});

export const logout = () => ({
  type: LOGOUT
});