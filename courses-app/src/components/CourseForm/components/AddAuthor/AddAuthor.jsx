import { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../../Input';
import Button from '../../../Button';
import { fetchData } from '../../../../common/utils/fetchData';
import { APP_REQUEST_PATHS, HTTP_METHODS } from '../../../../common/constants';
import styles from './styles/AddAuthor.module.css';

const AddAuthor = ({ setIsAuthorAdded }) => {
  const [inputValue, setInputValue] = useState('');

  const handleCreateAuthor = async () => {
    if (inputValue) {
      const { successful, error } = await fetchData({
        method: HTTP_METHODS.post,
        url: APP_REQUEST_PATHS.authorAdd,
        body: { name: inputValue },
      });

      if (!error && successful) {
        setIsAuthorAdded(true);
        setInputValue('');
      }
    }
  };

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.addAuthorWrapper}>
      <h3 className={styles.addAuthorTitle}>Add author</h3>
        <label>
          Author name
          <Input
            placeholder='Enter author name...'
            value={inputValue}
            onChange={handleInputChange}
          />
        </label>
      <div className={styles.buttonWrapper}>
        <Button
          onClick={handleCreateAuthor}
        >
          Create author
        </Button>
      </div>

    </div>
  );
};

AddAuthor.propTypes = {
  setIsAuthorAdded: PropTypes.func,
};

export default AddAuthor;
