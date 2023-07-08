import React from 'react';

import styles from './styles.module.css';

export const Button = ({type, buttonText, handleClick}) => (
	<button type={type} onClick={handleClick}>{buttonText}</button>
);
