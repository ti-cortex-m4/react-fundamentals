import { useState } from 'react';
import { Input } from '../../../Input/Input';
import { Button } from '../../../Button/Button';
import { fetchData } from '../../../../helpers/fetchData';
import { APP_REQUEST_PATHS } from '../../../../constants';
import styles from './styles.module.css';

export const CreateAuthor = ({ setIsAuthorAdded }) => {
  const [author, setAuthor] = useState('');

  const handleCreateAuthorClick = async () => {
    if (author) {
      const { response, error } = await fetchData({
        method: 'POST',
        url: APP_REQUEST_PATHS.addAuthor,
        body: { name: author },
      });

      if (!error && response.successful) {
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
      <strong>Create author</strong>
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
          handleClick={handleCreateAuthorClick}
        />
      </div>
    </div>
  );
};

export default CreateAuthor;
