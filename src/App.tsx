import React from 'react';
import { useSelector } from 'react-redux'
import Login from './views/login';
import UserDashboard from './views/userDashboard';
import { AppState } from './types';
import { useFetchAndState } from './hooks';
import { useDispatch } from 'react-redux'
import { login as loginURL } from './config/routes';
import { userLoad } from './modules/userModule/actions/userActions';

function App(): JSX.Element {
  const userIsLogged: boolean = useSelector((state: AppState) => state.user.isLogged);
  const [sessionRecoveryResponse, sessionRecoveryRequest] = useFetchAndState();
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
      dispatch(userLoad({ ...user, isLogged: true }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionRecoveryResponse.success]);

  return (
    userIsLogged ? <UserDashboard /> : <Login />
  );
}

export default App;
