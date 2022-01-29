export interface User {
  name: string;
  isLogged: boolean;
}

export interface AppState {
  user: User
}