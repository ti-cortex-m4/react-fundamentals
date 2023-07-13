import React from 'react';
import { Logo } from "./components/Logo";
import { Logout } from "./components/Logout";
import styles from './styles.module.css';

export const Header = ({ isLogged, setIsLogged }) => {
  return (
    <div className={styles.headerContainer}>
      <Logo />
      {isLogged && <Logout setIsLogged={setIsLogged} />}
    </div>
  );
};

export default Header;
