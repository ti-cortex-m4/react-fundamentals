import React from 'react';
import { Button } from '../../../../common/Button/Button';
import styles from './styles.module.css';

export const AuthorItem = ({
  authorId,
  authorName,
  buttonText,
  handleButtonClick,
}) => (
  <div key={authorId} className={styles.authorItem}>
    <span>{authorName}</span>
    <Button
      type='button'
      buttonText={buttonText}
      onClick={() => handleButtonClick(authorId)}
    />
  </div>
);

export default AuthorItem;
