export const menuNavigation = {
  DASHBOARD: 'dashboard',
  SETTINGS: 'settings',
} as const;

export type MenuItem = typeof menuNavigation[keyof typeof menuNavigation];