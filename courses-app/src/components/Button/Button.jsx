import React from 'react';
import styles from './styles.module.css';

export const Button = ({
	type,
	buttonText,
	disabled,
	handleClick
}) => (
	<button
		type={type}
		disabled={disabled}
		onClick={handleClick}>
		{buttonText}
	</button>
);
