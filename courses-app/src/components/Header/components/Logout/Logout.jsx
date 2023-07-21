import { useNavigate } from 'react-router-dom';

import { Button } from '../../../../common/Button/Button';
import { getUserNameFromLocalStorage, removeUserFromLocalStorage } from '../../../../helpers/localStorage';
import { LOGIN_PATH } from '../../../../constants';

import styles from './styles.module.css';

export const Logout = ({ setIsLogged }) => {
  const navigate = useNavigate();

  const userName = getUserNameFromLocalStorage();

  const handleLogoutButtonClick = () => {
//     dispatch(logoutUser());
//     localStorage.removeItem('user');
//     navigate('/login');

    removeUserFromLocalStorage();
    setIsLogged(false);

    navigate(LOGIN_PATH);
  };

  return (
    <div className={styles.userContainer}>
      <div className={styles.userName}>
        {userName}
      </div>
      <Button
        buttonText='Logout'
        onClick={handleLogoutButtonClick}
      />
    </div>
  );
};

export default Logout;
