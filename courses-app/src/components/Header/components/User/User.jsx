import { useState, useEffect } from 'react';
import { Button } from '../../../Button';
import { manageLocalStorage } from '../../../../common/utils/manageLocalStorage';
import {
    APP_REQUEST_PATHS,
    AUTH_TOKEN_NAME
} from '../../../../common/constants';
import { fetchData } from '../../../../common/utils/fetchData';
import styles from './styles.module.css';

export const User = ({ setIsLoggedIn }) => {
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
    const [, dropValue] = manageLocalStorage(AUTH_TOKEN_NAME);
    dropValue();
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
