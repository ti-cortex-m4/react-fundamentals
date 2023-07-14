import { Button } from '../../../../common/Button';
import { getUserFromLocalStorage, removeUserFromLocalStorage } from '../../../../helpers/localStorage';
import styles from './styles.module.css';

/* TODO */
export const Logout = ({ setIsLogged }) => {
  const [, userName] = getUserFromLocalStorage();

  const handleLogoutButtonClick = () => {
    removeUserFromLocalStorage();
    setIsLogged(false);
  };

  return (
    <div className={styles.userContainer}>
      <div className={styles.userName}>
        {userName ? userName : 'Admin'}
      </div>
      <Button
        buttonText='Logout'
        onClick={handleLogoutButtonClick}
      />
    </div>
  );
};

export default Logout;
