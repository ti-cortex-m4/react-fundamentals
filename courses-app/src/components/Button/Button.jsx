import React from 'react';
import styles from './styles.module.css';

/* TODO */ export const Button = ({
	type,
	buttonText,
	disabled,
	onClick
}) => (
	<button
		type={type}
		disabled={disabled}
		onClick={onClick}>
		{buttonText}
	</button>
);

export default Button;
