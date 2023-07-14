import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Input } from '../Input';
import { Button } from '../Button';
import { REQUEST_PATHS, APPLICATION_PATHS } from '../../constants';
import { fetchData } from '../../helpers/fetchData';
import { setUserToLocalStorage } from '../../helpers/localStorage';
import styles from './styles.module.css';

/* TODO */ export const Login = ({ isLogged, setIsLogged }) => {
  const initialFormData = {
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(initialFormData);

  const [formValid, setFormValid] = useState(true);

  const handleFormSubmit = async event => {
    event.preventDefault();

    const { response, error } = await fetchData({
      url: REQUEST_PATHS.login,
      method: 'POST',
      body: formData,
    });

    if (!error && response.successful) {
      const authToken = response.result.split(' ')[1];
      const userName = response.user?.name;
      setUserToLocalStorage(authToken, userName);

      setFormData(initialFormData);
      setIsLogged(true);

      setFormValid(true);
    } else {
      setFormValid(false);
      alert('Login failed: ' + response.result);
    }
  };

  const handleFormChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  if (isLogged) {
    return <Navigate to={APPLICATION_PATHS.courses} />
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
        <Link to={APPLICATION_PATHS.registration}>register</Link>
      </p>
    </div>
  );
};

export default Login;
