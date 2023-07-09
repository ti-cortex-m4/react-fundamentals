import React from 'react';
import { Button } from '../../../Button/Button';
import styles from './styles.module.css';

export const AuthorItem = ({
 authorName,
 buttonText,
 onButtonClick,
}) => (
	<div className={styles.authorItem}>
		<span>{authorName}</span>
        <Button
          type='button'
          buttonText={buttonText}
          onClick={() => onButtonClick(id)}
        />
	</div>
);
