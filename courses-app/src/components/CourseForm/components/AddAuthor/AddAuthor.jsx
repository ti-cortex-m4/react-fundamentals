import { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../../Input/Input';
import { Button } from '../../../Button/Button';
import { fetchData } from '../../../../common/utils/fetchData';
import {
  APP_REQUEST_PATHS,
  HTTP_METHODS
} from '../../../../common/constants';
import styles from './styles.module.css';

export const AddAuthor = ({ setIsAuthorAdded }) => {
  const [authorName, setAuthorName] = useState('');

  const onCreateAuthorClick = async () => {
    if (authorName) {
      const { successful, error } = await fetchData({
        method: HTTP_METHODS.post,
        url: APP_REQUEST_PATHS.authorAdd,
        body: { name: authorName },
      });

      if (!error && successful) {
        setIsAuthorAdded(true);
        setAuthorName('');
      }
    }
  };

  const onAuthorNameChange = event => {
    setAuthorName(event.target.value);
  };

  return (
    <div className={styles.newAuthorContainer}>
      <strong>Add author</strong>
      <div>
        <Input
          labelText='Author name'
          placeholderText='Enter author name...'
          name='authorName'
          value={authorName}
          onChange={onAuthorNameChange}
        />
        <Button
          type='button'
          buttonText='Create author'
          onClick={onCreateAuthorClick}
        />
      </div>
    </div>
  );
};

export default AddAuthor;
