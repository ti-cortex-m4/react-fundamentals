import React from 'react';
import { Logo } from "./components/Logo";
import { Logout } from "./components/Logout";
import styles from './styles.module.css';

export const Header = ({ isLoggedIn, setIsLoggedIn }) => {

	return (
		<div className={styles.headerContainer}>
			<Logo/>
            {
              isLoggedIn && <Logout
                setIsLoggedIn={setIsLoggedIn}
              />
            }
		</div>
	);
};
