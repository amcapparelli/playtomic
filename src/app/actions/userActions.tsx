import { USER_LOAD } from "./action-types";
import { User } from '../../types';

export const userLoad = (userInfo: User) => ({
  type: USER_LOAD,
  payload: userInfo
});