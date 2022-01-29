import * as React from 'react';
import { useSelector } from 'react-redux'
import { default as DashboardLayout } from '../layouts/dashboard';
import { AppState, User } from '../types';

const UserProfile: React.FC = (): JSX.Element => {
  const user: User = useSelector((state: AppState) => state.user);
  return (
    <DashboardLayout>
      <p>hola {user.name}</p>
    </DashboardLayout>
  );
}

export default UserProfile;
