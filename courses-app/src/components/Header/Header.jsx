import React from 'react';

import styles from './styles.module.css';

export const Header = () => {
	
	// write your cose here

	return (
		<div className={styles.headerContainer}>

			// use Logo component

			<div className={styles.userContainer}>
				<p className={styles.userName}>Boris</p>
				
				// reuse Button component for 'Login / Logout' button

			</div>
		</div>
	);
};
