import React from 'react';
import { Logo } from './components/Logo/Logo';
import { Logout } from './components/Logout/Logout';
import styles from './styles.module.css';

/* TODO */ export const Header = ({ isLogged, setIsLogged }) => {
  return (
    <div className={styles.headerContainer}>
      <Logo />
      {isLogged && <Logout setIsLogged={setIsLogged} />}
    </div>
  );
};

export default Header;
