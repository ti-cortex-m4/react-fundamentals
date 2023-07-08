import React from 'react';

import styles from './styles.module.css';

export const Button = ({buttonLable, handleClick}) => (
	<button onClick={handleClick}>{buttonLable}</button>
);
