import { SETTINGS_LOAD } from "./action-types";
import { Settings } from '../../../types';

export const settingsLoad = (settingsInfo: Settings) => ({
  type: SETTINGS_LOAD,
  payload: settingsInfo
});