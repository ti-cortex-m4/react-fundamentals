import React from 'react';
import { Button } from '../../../Button/Button';
import styles from './styles.module.css';

export const AuthorItem = ({
  id,
  name,
  buttonText,
  onButtonClick,
}) => (
  <div key={id} className={styles.authorItem}>
    <span>{name}</span>
    <Button
      type='button'
      buttonText={buttonText}
      onClick={() => onButtonClick(id)}
    />
  </div>
);

export default AuthorItem;
