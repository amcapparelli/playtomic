import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import Login from './views/login';
import UserDashboard from './views/userDashboard';
import { AppState } from './types';
import { useFetchAndState } from './hooks';
import { useDispatch } from 'react-redux'
import { login as loginURL } from './config/routes';
import { userLoad } from './modules/userModule/actions/userActions';

function App(): JSX.Element {
  const userIsLogged: boolean = useSelector((state: AppState) => state.user.isLogged);
  const [sessionRecoveryResponse, sessionRecoveryRequest, loading] = useFetchAndState();
  const dispatch = useDispatch();

  // Session recovery with token when user refreshes browser.
  React.useEffect(() => {
    if (!userIsLogged) {
      const token: string | null = localStorage.getItem('token');
      if (!!token) {
        sessionRecoveryRequest(`${loginURL}?token=${token}`)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userIsLogged])

  React.useEffect(() => {
    if (sessionRecoveryResponse.success) {
      const { user: { token, ...user } } = sessionRecoveryResponse;
      localStorage.setItem("token", token);
      dispatch(userLoad({ ...user, isLogged: true }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionRecoveryResponse.success]);

  return (
    loading ? <CircularProgress /> :
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            userIsLogged ? <Navigate to='/dashboard' /> : <Login />
          } />
          <Route path="/dashboard" element={
            userIsLogged ? <UserDashboard /> : <Navigate to='/' />
          } />
          <Route path="*" element={<p>page not found...</p>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
