import React from 'react';
import { Logo } from "./components/Logo";
import { User } from "./components/User";
import styles from './styles.module.css';

export const Header = ({ isLoggedIn, setIsLoggedIn }) => {

	return (
		<div className={styles.headerContainer}>
			<Logo/>

            {
              isLoggedIn && <User
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
