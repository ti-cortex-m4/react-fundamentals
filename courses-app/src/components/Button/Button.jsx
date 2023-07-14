import React from 'react';
import styles from './styles.module.css';

export const Button = ({
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
