import * as React from 'react';
import { Typography } from '@mui/material';
import { useFetchAndState } from '../hooks';
import { userStatistics as userStatisticsRoute } from '../config/routes';

const UserStatistics: React.FC = (): JSX.Element | null => {
  const [{ data }, userDashboardDataRequest] = useFetchAndState();

  React.useEffect(() => {
    userDashboardDataRequest(userStatisticsRoute);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    data
      ?
      <div>
        <Typography variant="h2"> These are your tennis statistics</Typography>
        <Typography variant="body1"> Win: {data.win}</Typography>
        <Typography variant="body1"> Lose: {data.lose}</Typography>
        <Typography variant="body1"> Ranking: {data.ranking}</Typography>
      </div>
      : null
  );
}

export default UserStatistics;
