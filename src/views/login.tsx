import React from 'react';
import {
  Button,
  TextField,
  Typography
} from '@material-ui/core';
import styledComponents from 'styled-components';
import { useFetch, useForm } from '../hooks';
import { login as loginURL } from '../config/routes';
import { requestMethods } from '../constants/requestMethods';

const Login: React.FC = (): JSX.Element => {
  const [loginResponse, loginRequest, loading] = useFetch();
  const [loginForm, setLoginForm] = useForm({});
  React.useEffect(() => {
    if (loginResponse.success) {
      console.log('success')
    }
  }, [loginResponse.success]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { target: { name, value } } = e;
    setLoginForm(name, value);
  }

  async function login(): Promise<void> {
    loginRequest(loginURL, requestMethods.POST, loginForm);
  };

  return (
    <StyledForm >
      <Typography variant="h2" component="h2">
        Sign in
      </Typography>
      {['email', 'password'].map((text) => (
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
