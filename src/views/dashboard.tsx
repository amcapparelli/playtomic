import * as React from 'react';
import { useSelector } from 'react-redux'
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
import { User } from '../types';

const Dasboard: React.FC = (): JSX.Element => {
  const user: User = useSelector((state: any) => state.user);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <StyledMenuContainer>
        <MenuList>
          <MenuItem>
            <IconButton>
              <DashboardCustomizeIcon />
              Dashboard
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton>
              <SettingsIcon />
              Settings
            </IconButton>
          </MenuItem>
        </MenuList>
      </StyledMenuContainer>
      <p>hola {user.name}</p>
    </>
  );
}

const StyledMenuContainer = styledComponents.div`
  margin-top: 5%;
`;

export default Dasboard;
