import { Button } from '../../../../common/Button';
import { getUserNameFromLocalStorage, removeUserFromLocalStorage } from '../../../../helpers/localStorage';
import styles from './styles.module.css';

/* TODO */
export const Logout = ({ setIsLogged }) => {
  const userName = getUserNameFromLocalStorage();

  const handleLogoutButtonClick = () => {
    removeUserFromLocalStorage();
    setIsLogged(false);
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
