import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Input } from '../Input';
import { Button } from '../Button';
import { APP_REQUEST_PATHS, APP_URL_PATHS } from '../../constants';
import { fetchData } from '../../helpers/fetchData';
import styles from './styles.module.css';

export const Registration = () => {
  const formInitialState = {
    name: '',
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(formInitialState);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleFormSubmit = async event => {
    event.preventDefault();

    const fetchConfig = {
      url: APP_REQUEST_PATHS.registration,
      method: 'POST',
      body: formData,
    };
    const { response, error } = await fetchData(fetchConfig);

    if (!error && response.successful) {
      setFormData(formInitialState);
      setIsRegistered(true);
    }
  };

  const handleFormChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  if (isRegistered) {
    return <Navigate to={APP_URL_PATHS.login} />
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleFormSubmit}>
        <h1>Registration</h1>
        <Input
          labelText='Name'
          placeholderText='Enter name'
          type='text'
          name='name'
          value={formData.name}
          valid={true}
          handleChange={handleFormChange}
        />
        <Input
          labelText='Email'
          placeholderText='Enter email'
          type='email'
          name='email'
          value={formData.email}
          valid={true}
          handleChange={handleFormChange}
        />
        <Input
          labelText='Password'
          placeholderText='Enter password'
          type='password'
          name='password'
          value={formData.password}
          valid={true}
          handleChange={handleFormChange}
        />
        <Button
          type='submit'
          buttonText='Registration'
        />
      </form>
      <p>
        If you have an account you can&nbsp;
        <Link to={APP_URL_PATHS.login}>login</Link>
      </p>
    </div>
  );
};

export default Registration;
