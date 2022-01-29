import React from 'react';
import { useSelector } from 'react-redux'
import Login from './views/login';
import Dashboard from './views/dashboard';
import { AppState } from './types';

function App(): JSX.Element {
  const userIsLogged: boolean = useSelector((state: AppState) => state.user.isLogged);
  return (
    <>
      {
        userIsLogged ? <Dashboard /> : <Login />
      }
    </>
  );
}

export default App;
