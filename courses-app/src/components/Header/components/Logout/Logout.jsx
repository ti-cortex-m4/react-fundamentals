import { useState, useEffect } from 'react';
import { Button } from '../../../Button';
import { removeUserFromLocalStorage } from '../../../../helpers/localStorage';
import {
    APP_REQUEST_PATHS
} from '../../../../common/constants';
import { fetchData } from '../../../../common/utils/fetchData';
import styles from './styles.module.css';

export const Logout = ({ setIsLogged }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const getUserData = async () => {
      const { response, error } = await fetchData({
        url: APP_REQUEST_PATHS.userData,
      });

      if (!error && response.successful) {
        setUserData(response.result);
      } else {
        setIsLogged(false);
      }
    };

    getUserData();
  }, []);

  const onLogoutButtonClick = () => {
    removeUserFromLocalStorage();
    setIsLogged(false);
  };

  return (
    <div className={styles.userContainer}>
      <div className={styles.userName}>
        {userData.name ? userData.name : 'Admin'}
      </div>
      <Button
        buttonText='Logout'
        onClick={onLogoutButtonClick}
      />
    </div>
  );
};
