import React from 'react';
import { Logo } from "./components/Logo";
import { LoggedUser } from "./components/LoggedUser";
import styles from './styles.module.css';

export const Header = ({ isLoggedIn, setIsLoggedIn }) => {

	return (
		<div className={styles.headerContainer}>
			<Logo/>

            {
              isLoggedIn && <LoggedUser
                authButtonName='Logout'
                setIsLoggedIn={setIsLoggedIn}
              />
            }
{/* 			<div className={styles.userContainer}> */}
{/* 				<p className={styles.userName}>Boris</p> */}
{/* 				 */}
{/* 				// reuse Button component for 'Login / Logout' button */}

{/* 			</div> */}
		</div>
	);
};
