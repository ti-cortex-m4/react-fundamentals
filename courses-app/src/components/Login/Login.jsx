import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Input } from '../Input';
import { Button } from '../Button';
import {
  APP_REQUEST_PATHS,
  APP_URL_PATHS
} from '../../common/constants';
import { fetchData } from '../../common/utils/fetchData';
import { setUserToLocalStorage } from '../../helpers/localStorage';
import styles from './styles.module.css';

export const Login = ({ isLogged, setIsLogged }) => {
  const formInitialState = {
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(formInitialState);

  const handleFormSubmit = async event => {
    event.preventDefault();

    const fetchConfig = {
      url: APP_REQUEST_PATHS.login,
      method: 'POST',
      body: formData,
    };
    const { response, error } = await fetchData(fetchConfig);

    if (!error && response.successful) {
//       console.log("login " + result);
//       console.log("user " + user?.name);

      const authToken = response.result.split(' ')[1];
      const userName = response.user?.name;
      setUserToLocalStorage(authToken, userName);

      setFormData(formInitialState);
      setIsLogged(true);
    }
  };

  const handleFormChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  if (isLogged) {
    return <Navigate to={APP_URL_PATHS.courses} />
  }
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
          valid={true}
          onChange={handleFormChange}
        />
        <Input
          labelText='Password'
          placeholderText='Enter password'
          type='password'
          name='password'
          value={formData.password}
          valid={true}
          onChange={handleFormChange}
        />
        <Button
          type='submit'
          buttonText='Login'
        />
      </form>
      <p>
        If you don't have an account you can&nbsp;
        <Link to={APP_URL_PATHS.registration}>register</Link>
      </p>
    </div>
  );
};

export default Login;
