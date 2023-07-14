import React from 'react';
import { Button } from '../../../Button/Button';
import styles from './styles.module.css';

/* TODO */ export const AuthorItem = ({
  id,
  name,
  buttonText,
  handleButtonClick,
}) => (
  <div key={id} className={styles.authorItem}>
    <span>{name}</span>
    <Button
      type='button'
      buttonText={buttonText}
      onClick={() => handleButtonClick(id)}
    />
  </div>
);

export default AuthorItem;
