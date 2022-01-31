import * as React from 'react';
import { useSelector } from 'react-redux';
import { default as DashboardLayout } from '../layouts/dashboard';
import { AppState, User } from '../types';
import { MenuItem, menuNavigation } from '../constants/menuNavigation';
import { UserStatistics, UserSettings } from '../components';

const UserDashboard: React.FC = (): JSX.Element => {
  const user: User = useSelector((state: AppState) => state.user);
  const menuItemActive: MenuItem = useSelector(
    (state: AppState) => state.dashBoard.menuActive
  );

  return (
    <DashboardLayout userName={user.name}>
      {
        menuItemActive === menuNavigation.DASHBOARD &&
        <UserStatistics />
      }
      {
        menuItemActive === menuNavigation.SETTINGS &&
        <UserSettings />
      }
    </DashboardLayout>
  );
}

export default UserDashboard;
