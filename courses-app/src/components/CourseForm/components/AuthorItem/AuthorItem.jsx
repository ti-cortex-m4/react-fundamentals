import React from 'react';

import { Button } from '../../../../common/Button/Button';

import styles from './styles.module.css';

const AuthorItem = ({
  authorId,
  authorName,
  buttonText,
  handleButtonClick,
}) => (
  <div key={authorId} className={styles.authorItem}>
    <span>{authorName}</span>
    <Button
      buttonText={buttonText}
      onClick={() => handleButtonClick(authorId)}
    />
  </div>
);

export default AuthorItem;
