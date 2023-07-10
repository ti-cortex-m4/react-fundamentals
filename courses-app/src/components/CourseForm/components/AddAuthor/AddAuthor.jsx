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
  const [author, setAuthor] = useState('');

  const onCreateAuthorClick = async () => {
    if (author) {
      const { successful, error } = await fetchData({
        method: 'POST',
        url: APP_REQUEST_PATHS.authorAdd,
        body: { name: author },
      });

      if (!error && successful) {
        setIsAuthorAdded(true);
        setAuthor('');
      }
    }
  };

  const onAuthorChange = event => {
    setAuthor(event.target.value);
  };

  return (
    <div className={styles.newAuthorContainer}>
      <strong>Add author</strong>
      <div>
        <Input
          labelText='Author name'
          placeholderText='Enter author name...'
          type='text'
          name='author'
          value={author}
          valid={true}
          onChange={onAuthorChange}
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
