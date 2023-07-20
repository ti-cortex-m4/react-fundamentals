import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import { FRONTEND_PATHS } from '../../constants';
// import { loginUser, getCurrentUser } from '../../services/user';
import { setAuthTokenToLocalStorage, setUserNameToLocalStorage, setUserRoleToLocalStorage } from '../../helpers/localStorage';

import { loginUser } from '../../store/user/thunk';
import { loginSuccessAction } from '../../store/user/actions';
import { getUserSelector } from '../../store/user/selectors';

import styles from './styles.module.css';

export const Login = ({ isLogged, setIsLogged }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState(false);
  const loggedUser = useSelector(getUserSelector);

  const initialFormData = {
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const [formValid, setFormValid] = useState(true);

//   useEffect(() => {
//     if (getUserFromLocalStorage()?.token) {
//       navigate('/courses');
//     }
//   }, [navigate]);
//
  useEffect(() => {
    if (loggedUser.loginResult === true) {
      navigate('/courses');
//       dispatch(registerResultAction(null)); TODO
    }
//     if (
//       loggedUser.isAuth &&
//       loggedUser.name !== '' &&
//       loggedUser.email !== '' &&
//       loggedUser.token !== '' &&
//       !loggedUser.loginError
//     ) {
//       navigate('/courses');
//     }
//
//     if (loggedUser.loginError === true) {
//       setError(true);
//
//       setTimeout(() => {
//         setError(false);
//         dispatch(setLoginErrorAction(false));
//       }, 5000);
//     }
  },
  [
  loggedUser.loginResult,
//   navigate,
//   dispatch
  ]);

  const handleFormSubmit = /*async*/ event => {
    event.preventDefault();

   dispatch(loginUser(formData));
//     loginUser(
//       formData,
//       (response, error) => {
//         const authToken = response.result.split(' ')[1];
//         setAuthTokenToLocalStorage(authToken);
//
//         const userName = response.user?.name;
//         setUserNameToLocalStorage(userName);
//
//         getCurrentUser(
//           (response, error) => {
//             const userRole = response.result?.role;
//             setUserRoleToLocalStorage(userRole);
//
//             setFormData(initialFormData);
//             setIsLogged(true);
//             setFormValid(true);
//
//             navigate(FRONTEND_PATHS.courses);
//           },
//           (response, error) => {
//             setFormValid(false);
//             alert('Reading user data failed: ' + response.result);
//           }
//         );
//       },
//       (response, error) => {
//         setFormValid(false);
//         alert('Login failed: ' + response.result);
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
        (loggedUser.loginResult === false) &&
        <p>
          login error: {loggedUser.loginError}
        </p>
      }
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
        <Link to={FRONTEND_PATHS.registration}>register</Link>
      </p>
    </div>
  );
};

export default Login;
