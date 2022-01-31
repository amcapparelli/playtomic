import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { navigateDashboard, navigateSettings } from '../redux/dashboardModule/actions/dashboardActions';
import { logout } from '../redux/userModule/actions/userActions';
import { MenuItem as MenuItemType } from '../constants/menuNavigation';
import { AppState } from '../types';

type Props = {
  children: React.ReactNode,
  userName: string
}

const Dashboard: React.FC<Props> = ({ children, userName }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const menuItemActive: MenuItemType = useSelector(
    (state: AppState) => state.dashBoard.menuActive
  );

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
              {`Hello ${userName}. This is your ${menuItemActive.toUpperCase()} page`}
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
