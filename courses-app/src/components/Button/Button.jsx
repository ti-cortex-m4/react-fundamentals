import React from 'react';

import styles from './styles.module.css';

export const Button = ({buttonText, handleClick}) => (
	<button onClick={handleClick}>{buttonText}</button>
);
