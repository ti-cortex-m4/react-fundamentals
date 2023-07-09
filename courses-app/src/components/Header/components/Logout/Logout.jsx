import { useState, useEffect } from 'react';
import { Button } from '../../../Button';
import { removeAuthTokenFromLocalStorage, removeUserNameFromLocalStorage } from '../../../../helpers/localStorage';
import {
    APP_REQUEST_PATHS
} from '../../../../common/constants';
import { fetchData } from '../../../../common/utils/fetchData';
import styles from './styles.module.css';

export const Logout = ({ setIsLoggedIn }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const getUserData = async () => {
      const { successful, result, error } = await fetchData({
        url: APP_REQUEST_PATHS.userData,
      });

      if (!error && successful) {
        setUserData(result);
      } else {
        setIsLoggedIn(false);
      }
    };

    getUserData();
  }, []);

  const onLogoutButtonClick = () => {
//     const [, dropValue] = manageLocalStorage(AUTH_TOKEN_NAME);
    removeAuthTokenFromLocalStorage();
    removeUserNameFromLocalStorage();
    setIsLoggedIn(false);
  };

  return (
    <div className={styles.userContainer}>
      <div className={styles.userName}>
        {userData.name}
      </div>
      <Button
        buttonText='Logout'
        onClick={onLogoutButtonClick}
      />
    </div>
  );
};
