import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../../common/Input';
import { Button } from '../../common/Button';
import { BACKEND_PATHS, FRONTEND_PATHS } from '../../constants';
import { login, getUserData } from '../../services/user';
import { fetchData } from '../../helpers/fetchData';
import { setAuthTokenToLocalStorage, setUserNameToLocalStorage, setUserRoleToLocalStorage } from '../../helpers/localStorage';
import styles from './styles.module.css';

/*TODO*/

export const Login = ({ isLogged, setIsLogged }) => {
  const navigate = useNavigate();

  const initialFormData = {
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(initialFormData);

  const [formValid, setFormValid] = useState(true);

  const handleFormSubmit = async event => {
    event.preventDefault();

    const login = async (formData) => {
      const { response, error } = await fetchData({
        url: BACKEND_PATHS.login,
        method: 'POST',
        body: formData,
      });

      if (!error && response.successful) {
        const authToken = response.result.split(' ')[1];
        setAuthTokenToLocalStorage(authToken);
        const userName = response.user?.name;
        setUserNameToLocalStorage(userName);

        setFormData(initialFormData);
        setIsLogged(true);

        setFormValid(true);

        getUserData();
      } else {
        setFormValid(false);
        alert('Login failed: ' + response.result);
      }
    };

    const getUserData = async () => {
      const { response, error } = await fetchData({
        url: BACKEND_PATHS.userData,
        method: 'GET',
      });

      if (!error && response.successful) {
        const userRole = response.result?.role;
        setUserRoleToLocalStorage(userRole);

        navigate(FRONTEND_PATHS.courses);
      } else {
        setFormValid(false);
        alert('Reading user data failed: ' + response.result);
      }
    };

    login(
      formData,
      (response, error) => {
        const authToken = response.result.split(' ')[1];
        setAuthTokenToLocalStorage(authToken);

        const userName = response.user?.name;
        setUserNameToLocalStorage(userName);

        setFormData(initialFormData);
        setIsLogged(true);

        setFormValid(true);

        getUserData(
          (response, error) => {
            const userRole = response.result?.role;
            setUserRoleToLocalStorage(userRole);

            navigate(FRONTEND_PATHS.courses);
          },
          (response, error) => {
            setFormValid(false);
            alert('Reading user data failed: ' + response.result);
          }
        );
      },
      (response, error) => {
        setFormValid(false);
        alert('Login failed: ' + response.result);
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
