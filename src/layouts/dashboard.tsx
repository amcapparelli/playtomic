import * as React from 'react';
import { useDispatch } from 'react-redux';
import styledComponents from 'styled-components';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import { navigateDashboard, navigateSettings } from '../modules/dashboardModule/actions/dashboardActions';
import { logout } from '../modules/userModule/actions/userActions';

type Props = {
  children: React.ReactNode,
  userName: string
}

const Dashboard: React.FC<Props> = ({ children, userName }: Props): JSX.Element => {
  const dispatch = useDispatch();

  function handleLogoutClick() {
    dispatch(logout())
    localStorage.removeItem('token');
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {`Hello ${userName}`}
            </Typography>
            <Button color="inherit" onClick={handleLogoutClick}>Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <StyledMainContainer>
        <MenuList>
          <MenuItem>
            <IconButton onClick={() => dispatch(navigateDashboard())} >
              <DashboardCustomizeIcon />
              Dashboard
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton onClick={() => dispatch(navigateSettings())}>
              <SettingsIcon />
              Settings
            </IconButton>
          </MenuItem>
        </MenuList>
        {children}
      </StyledMainContainer>
    </>
  );
}

const StyledMainContainer = styledComponents.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  margin-top: 5%;
`;

export default Dashboard;
