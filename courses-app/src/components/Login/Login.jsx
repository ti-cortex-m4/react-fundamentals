import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import { APPLICATION_PATHS } from '../../constants';
// import { setAuthTokenToLocalStorage, setUserNameToLocalStorage, setUserRoleToLocalStorage } from '../../helpers/localStorage';

import { getUserSelector } from '../../store/user/selectors';
import { loginUserAction } from '../../store/user/thunk';
import { loginUserErrorAction } from '../../store/user/actions';

import styles from './styles.module.css';

export const Login = ({ isLogged, setIsLogged }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState(false);

  const user = useSelector(getUserSelector);

  const initialFormData = {
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const [formValid, setFormValid] = useState(true);

  useEffect(() => {
    if (user.loginResult === true) {
      //setFormData(initialFormData);
      setIsLogged(true);
      //setFormValid(true);

      navigate(APPLICATION_PATHS.courses);
    }

    if (user.loginResult === false) {
      setFormValid(false);
      alert('Login error: ' + user.loginError);

      dispatch(loginUserErrorAction({
        loginResult: null,
        loginError: null
      }));
    }
  },
    [
      user.loginResult,
      user.loginError,
      navigate,
      dispatch
    ]);

  const handleFormSubmit = event => {
    event.preventDefault();

    dispatch(loginUserAction(formData));
  };

  const handleFormChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleFormSubmit}>
        <h1>Login</h1>
        <Input
          labelText='Email'
          placeholderText='Enter email'
          type='email'
          name='email'
          value={formData.email}
          valid={formValid}
          onChange={handleFormChange}
        />
        <Input
          labelText='Password'
          placeholderText='Enter password'
          type='password'
          name='password'
          value={formData.password}
          valid={formValid}
          onChange={handleFormChange}
        />
        <Button
          type='submit'
          buttonText='Login'
        />
      </form>
      <p>
        If you don't have an account you can&nbsp;
        <Link to={APPLICATION_PATHS.register}>register</Link>
      </p>
    </div>
  );
};

export default Login;
