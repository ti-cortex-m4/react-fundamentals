import React from 'react';
import styles from './styles.module.css';

export const Header = ({ isLoggedIn, setIsLoggedIn }) => {

	return (
		<div className={styles.headerContainer}>
			<Logo/>

            {
              isLoggedIn && <AuthBlock
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
