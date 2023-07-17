import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import { FRONTEND_PATHS } from '../../constants';
import { registerUser } from '../../services/user';

import { register } from '../../_store/user/thunk';
import { registrationErrorAction, successfullRegistrationAction} from '../../_store/user/actions';
import { getUserSelector } from '../../_store/user/selectors';

import styles from './styles.module.css';

export const Registration = () => {
  const navigate = useNavigate();

  const initialFormData = {
    name: '',
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const [formValid, setFormValid] = useState(true);

  const handleFormSubmit = async event => {
    event.preventDefault();

    registerUser(
      formData,
      (response, error) => {
        setFormData(initialFormData);
        setFormValid(true);

        navigate(FRONTEND_PATHS.login);
      },
      (response, error) => {
        setFormValid(false);
        alert('Registration failed: ' + response.errors);
      }
    );
  };

  const handleFormChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

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
          valid={formValid}
          onChange={handleFormChange}
        />
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
          buttonText='Registration'
        />
      </form>
      <p>
        If you have an account you can&nbsp;
        <Link to={FRONTEND_PATHS.login}>login</Link>
      </p>
    </div>
  );
};

export default Registration;
