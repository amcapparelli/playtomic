import * as React from 'react';
import { useSelector } from 'react-redux'
import { Checkbox, Typography } from '@mui/material';
import { useFetchAndDispatch } from '../hooks';
import { settingsLoad } from '../modules/settingsModule/actions/settingsActions';
import { userSettings as userSettingsRoute } from '../config/routes';
import { AppState, Settings } from '../types';

const UserSettings: React.FC = (): JSX.Element | null => {
  const [userSettingsDataRequest] = useFetchAndDispatch();
  const settings: Settings = useSelector((state: AppState) => state.settings);

  React.useEffect(() => {
    userSettingsDataRequest(userSettingsRoute, settingsLoad);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Typography variant="h2" >These are your Settings</Typography>
      <Typography variant="body1"> Language: {settings.language}</Typography>
      <Typography variant="body1">
        Email Suscription: <Checkbox checked={settings.emailSuscription} />
      </Typography>
    </div>

  );
}

export default UserSettings;
