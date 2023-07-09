import React from 'react';
import styles from './styles.module.css';

export const Button = ({type, buttonText, onClick}) => (
	<button type={type} onClick={onClick}>{buttonText}</button>
);
