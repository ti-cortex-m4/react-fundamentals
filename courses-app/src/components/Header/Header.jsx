import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';
import { getUserNameFromLocalStorage, removeUserFromLocalStorage } from '../../helpers/localStorage';
import { LOGIN_PATH } from '../../constants';

import { getUserSelector } from '../../store/user/selectors';
import { logoutUserThunk } from '../../store/user/thunk';
import { logoutUserErrorAction } from '../../store/user/actions';

import styles from './styles.module.css';

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(getUserSelector);
    const userName = getUserNameFromLocalStorage();

  useEffect(() => {
    if (user.logoutResult === true) {
      navigate(LOGIN_PATH);
    }

    if (user.logoutResult === false) {
      navigate(LOGIN_PATH);
    }
  },
    [
      user.logoutResult,
      navigate,
      dispatch
    ]);

  const handleLogoutButtonClick = () => {
     dispatch(logoutUserThunk());
  };


  return (
    <div className={styles.headerContainer}>
      <Logo />
{/*       {isLogged &&  */}
    <div className={styles.userContainer}>
      <div className={styles.userName}>
        {userName}
      </div>
      <Button
        buttonText='Logout'
        onClick={handleLogoutButtonClick}
      />
    </div>
{/*       } */}
    </div>
  );
};

export default Header;
