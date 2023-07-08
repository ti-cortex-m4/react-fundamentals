import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Button } from '../../../Button';
import { manageLocalStorage } from '../../../../common/utils/manageLocalStorage';
import { APP_REQUEST_PATHS, AUTH_TOKEN_NAME } from '../../../../common/constants';
import { fetchData } from '../../../../common/utils/fetchData';
import styles from './styles.module.css';

export const LoggedUser = ({ authButtonName, setIsLoggedIn }) => {
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

  const handleLogoutButtonClick = () => {
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
        onClick={handleLogoutButtonClick}
      >
        Logout
      </Button>
    </div>
  );
};

// AuthBlock.propTypes = {
//   authButtonName: PropTypes.string,
//   setIsLoggedIn: PropTypes.func,
// };
//
// export default AuthBlock;
