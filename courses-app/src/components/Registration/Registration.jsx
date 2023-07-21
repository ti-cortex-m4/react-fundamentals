import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import { LOGIN_PATH } from '../../constants';

import { getUserSelector } from '../../store/user/selectors';
import { registerUserThunk } from '../../store/user/thunk';
import { registerUserErrorAction } from '../../store/user/actions';

import styles from './styles.module.css';

export const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

//   const [registrationError, setRegistrationError] = useState(false);

  const user = useSelector(getUserSelector);

  useEffect(() => {
    if (user.actionResult === true) {
//         setFormData(initialFormData);
//         setFormValid(true);

        navigate(LOGIN_PATH);
//       navigate('/login');
//       dispatch(actionResultAction(null)); TODO
    }

    if (user.actionResult === false) {
      setFormValid(false);
      alert('Register error: ' + user.actionError);

      dispatch(registerUserErrorAction({
        actionResult: null,
        actionError: null
      }));
    }
  },
  [
    user.actionResult,
    user.actionError,
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

  const handleFormSubmit = event => {
    event.preventDefault();

    dispatch(registerUserThunk(formData));
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
        <Link to={LOGIN_PATH}>login</Link>
      </p>
    </div>
  );
};

export default Registration;
