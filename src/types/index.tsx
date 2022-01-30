import { MenuItem } from '../constants/menuNavigation';
import { Language } from '../constants/languages';

export interface User {
  name: string;
  isLogged: boolean;
}

export interface Dashboard {
  menuActive: MenuItem;
}

export interface Settings {
  language: Language;
  emailSuscription: boolean
}

export interface AppState {
  user: User;
  dashBoard: Dashboard;
  settings: Settings
}