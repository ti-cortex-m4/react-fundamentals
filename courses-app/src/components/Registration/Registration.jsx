import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import { FRONTEND_PATHS } from '../../constants';
// import { registerUser } from '../../services/user';

import { registerUser } from '../../_store/user/thunk';
import { registerResultAction} from '../../_store/user/actions';
import { getUserSelector } from '../../_store/user/selectors';

import styles from './styles.module.css';

export const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [registrationError, setRegistrationError] = useState(false);

  const loggedUser = useSelector(getUserSelector);

//   useEffect(() => {
//     if (getUserFromLocalStorage()?.token) {
//       navigate('/courses');
//     }
//   }, [navigate]);

  useEffect(() => {
    if (loggedUser.registerResult === true) {
      navigate('/login');
      dispatch(registerResultAction(null));
    }

    if (loggedUser.registerResult === false) {
      setRegistrationError(true);
    }
//     if (loggedUser.registrationError) {
//       setRegistrationError(true);
//
//       setTimeout(() => {
//         setRegistrationError(false);
//         dispatch(registrationErrorAction(false));
//       }, 5000);
//     }
  },
  [
    loggedUser.registerResult,
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

    dispatch(registerUser(formData));

//     registerUser(
//       formData,
//       (response, error) => {
//         setFormData(initialFormData);
//         setFormValid(true);
//
//         navigate(FRONTEND_PATHS.login);
//       },
//       (response, error) => {
//         setFormValid(false);
//         alert('Registration failed: ' + response.errors);
//       }
//     );
  };

  const handleFormChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={styles.container}>
      {
        registrationError &&
        <p>
          registration error
        </p>
      }
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
