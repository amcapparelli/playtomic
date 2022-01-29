import React from 'react';
import {
  Button,
  TextField,
  Typography
} from '@material-ui/core';
import styledComponents from 'styled-components';
import { useFetch, useForm } from '../hooks';
import { useDispatch } from 'react-redux'
import { login as loginURL } from '../config/routes';
import { requestMethods } from '../constants/requestMethods';
import { userLoad } from '../app/actions/userActions';

const Login: React.FC = (): JSX.Element => {
  const [loginResponse, loginRequest, loading] = useFetch();
  const [loginForm, setLoginForm] = useForm({});
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (loginResponse.success) {
      const { user: { token, ...user } } = loginResponse;
      localStorage.setItem("token", token);
      dispatch(userLoad({ ...user, isLogged: true }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginResponse, loginResponse.success]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { target: { name, value } } = e;
    setLoginForm(name, value);
  }

  async function login(): Promise<void> {
    loginRequest(loginURL, loginForm, requestMethods.POST);
  };

  return (
    <StyledForm >
      <Typography variant="h2" component="h2">
        Sign in
      </Typography>
      {['email', 'password'].map((text: string) => (
        <TextField
          key={text}
          label={text}
          name={text}
          type={text}
          variant="outlined"
          onChange={handleChange}
        />
      ))}
      <StyledButton
        disabled={loading}
        variant="contained"
        color="primary"
        onClick={login}
        size="large"
      >
        {loading ? 'loading' : 'Login'}
      </StyledButton>
    </StyledForm>
  );
}

const StyledForm = styledComponents.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  width: 30%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledButton = styledComponents(Button)`
  width: 40%;
  justify-self: center;
`;

export default Login;
