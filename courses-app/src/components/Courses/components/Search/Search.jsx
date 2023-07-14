// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import Button from '../../Button';
// import Input from '../../Input';
// import styles from './styles/Search.module.css';

const Search = ({ handleFormSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const onFormSubmit = event => {
    event.preventDefault();
    if (!inputValue) {
      return;
    }
    handleFormSearch(inputValue);
  };

  const onDrop = () => {
    setInputValue('');
    handleFormSearch();
  };

  const onInputChange = event => {
    setInputValue(event.target.value);
  };

  return (
    <form className={styles.searchForm} onSubmit={onFormSubmit}>
      <Input
        extraStyles={styles.spacing}
        value={inputValue}
        placeholder='Enter course name or id...'
        onChange={onInputChange}
      />
      <Button
        size='large'
        type='submit'
        extraStyles={styles.spacing}
      >
        Search
      </Button>
      <Button
        size='large'
        onClick={onDrop}
      >
        Drop
      </Button>
    </form>
  );
};

export default Search;
