import React from 'react';
import LogoImage from '../../../../assets/logo.png';
import styles from './styles.module.css';

export const Logo = () =>
<img
  src={LogoImage}
  className={styles.logo}
  alt='logo'
/>;
