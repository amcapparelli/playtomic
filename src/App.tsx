import React from 'react';
import { useSelector } from 'react-redux'
import Login from './views/login';
import UserDashboard from './views/userDashboard';
import { AppState } from './types';

function App(): JSX.Element {
  const userIsLogged: boolean = useSelector((state: AppState) => state.user.isLogged);

  // TODO: session recovery with token
  React.useEffect(() => {
    if (!userIsLogged) {
      const token: string | null = localStorage.getItem('token');
      if (!!token) {
        console.log('session recovery')
      }
    }
  }, [userIsLogged])

  return (
    <>
      {
        userIsLogged ? <UserDashboard /> : <Login />
      }
    </>
  );
}

export default App;
