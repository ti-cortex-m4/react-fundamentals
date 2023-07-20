import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import { APPLICATION_PATHS } from '../../constants';

import { getUserSelector } from '../../store/user/selectors';
import { registerUserAction } from '../../store/user/thunk';
import { registerUserErrorAction } from '../../store/user/actions';

import styles from './styles.module.css';

export const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [registrationError, setRegistrationError] = useState(false);

  const user = useSelector(getUserSelector);

  useEffect(() => {
    if (user.registerResult === true) {
//         setFormData(initialFormData);
//         setFormValid(true);

        navigate(APPLICATION_PATHS.login);
//       navigate('/login');
//       dispatch(registerResultAction(null)); TODO
    }

    if (user.registerResult === false) {
      setFormValid(false);
      alert('Register error: ' + user.registerError);

      dispatch(registerUserErrorAction({
        registerResult: null,
        registerError: null
      }));
    }
  },
  [
    user.registerResult,
    user.registerError,
    navigate,
    dispatch,
  ]);

  const initialFormData = {
    name: '',
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const [formValid, setFormValid] = useState(true);

  const handleFormSubmit = /*async*/ event => {
    event.preventDefault();

    dispatch(registerUserAction(formData));
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
        <Link to={APPLICATION_PATHS.login}>login</Link>
      </p>
    </div>
  );
};

export default Registration;
