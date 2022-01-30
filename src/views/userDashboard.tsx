import * as React from 'react';
import { useSelector } from 'react-redux'
import { default as DashboardLayout } from '../layouts/dashboard';
import { AppState, User } from '../types';
import { UserStatistics } from '../components';
import { useFetch } from '../hooks';
import { userDashboard } from '../config/routes';

const UserDashboard: React.FC = (): JSX.Element => {
  const user: User = useSelector((state: AppState) => state.user);
  const [userDashboardData, userDashboardDataRequest, loading] = useFetch();

  React.useEffect(() => {
    userDashboardDataRequest(userDashboard);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <DashboardLayout userName={user.name}>
      {
        loading
          ? 'loading...'
          : <UserStatistics statistics={userDashboardData.data} />
      }
    </DashboardLayout>
  );
}

export default UserDashboard;
