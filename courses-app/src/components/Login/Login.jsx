import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import MainWrapper from '../MainWrapper';
import { Input } from '../Input';
import { Button } from '../Button';
import {
  APP_REQUEST_PATHS,
  HTTP_METHODS,
  APP_URL_PATHS
} from '../../common/constants';
import { fetchData } from '../../common/utils/fetchData';
import { setAuthTokenToLocalStorage } from '../../helpers/localStorage';
import styles from './styles.module.css';

export const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const formInitialState = {
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(formInitialState);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleFormSubmit = async event => {
    event.preventDefault();

    const fetchConfig = {
      url: APP_REQUEST_PATHS.login,
      method: HTTP_METHODS.post,
      body: formData,
    };
    const { successful, result, user, error } = await fetchData(fetchConfig);

    if ( !error && successful ) {
      console.log("login " + result);

      const authToken = result.split(' ')[1];
      setAuthTokenToLocalStorage(authToken);

      console.log("user " + user?.name);

      setFormData(formInitialState);
      setIsLoggedIn(true);
    }
  };

  const handleFormChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  if (isLoggedIn) {
    return <Navigate to={APP_URL_PATHS.courses} />
  }
	return (
		<div className={styles.container}>
			<form onSubmit={handleFormSubmit}>
				<h1>Login</h1>
              <Input
                labelText='Email'
                placeholderText='Enter email'
                name='email'
                value={formData.email}
                onChange={handleFormChange}
//                 type='email'
              />
              <Input
                labelText='Password'
                placeholderText='Enter password'
                name='password'
                value={formData.password}
                onChange={handleFormChange}
              />
              <Button
                type='submit'
                buttonText='Login'
              />
			</form>
			<p>
				If you don't have an account you can&nbsp;
				<Link to='/registration'>register</Link>
			</p>
		</div>
	);
};
