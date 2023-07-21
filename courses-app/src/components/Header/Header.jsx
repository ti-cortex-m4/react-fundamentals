import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Logo } from './components/Logo/Logo';
import { Logout } from './components/Logout/Logout';

import { getUserNameFromLocalStorage, removeUserFromLocalStorage } from '../../helpers/localStorage';
import { getUserSelector } from '../../store/user/selectors';

import styles from './styles.module.css';

export const Header = (/*{ isLogged, setIsLogged }*/) => {

  const user = useSelector(getUserSelector);
   console.log('Header user ' + JSON.stringify(user));

  return (
    <div className={styles.headerContainer}>
      <Logo />
{/*       {isLogged &&  */}
      <Logout /*setIsLogged={setIsLogged}*/ />
{/*       } */}
    </div>
  );
};

export default Header;
