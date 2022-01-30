export enum menuNavigation {
  DASHBOARD = 'dashboard',
  SETTINGS = 'settings',
};

export type MenuItem = typeof menuNavigation[keyof typeof menuNavigation];