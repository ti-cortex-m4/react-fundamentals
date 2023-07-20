import { useNavigate } from 'react-router-dom';

import { Button } from '../../../../common/Button/Button';
import { getUserNameFromLocalStorage, removeUserFromLocalStorage } from '../../../../helpers/localStorage';
import { APPLICATION_PATHS } from '../../../../constants';

import styles from './styles.module.css';

export const Logout = ({ setIsLogged }) => {
  const navigate = useNavigate();

  const userName = getUserNameFromLocalStorage();

  const handleLogoutButtonClick = () => {
    removeUserFromLocalStorage();
    setIsLogged(false);

    navigate(APPLICATION_PATHS.login);
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
