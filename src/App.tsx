import React from 'react';
import { useSelector } from 'react-redux'
import Login from './views/login';
import UserProfile from './views/userProfile';
import { AppState } from './types';

function App(): JSX.Element {
  const userIsLogged: boolean = useSelector((state: AppState) => state.user.isLogged);
  return (
    <>
      {
        userIsLogged ? <UserProfile /> : <Login />
      }
    </>
  );
}

export default App;
