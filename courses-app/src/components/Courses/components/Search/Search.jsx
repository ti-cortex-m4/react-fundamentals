import { useState } from 'react';
import { Button } from '../../../../components/Button/Button';
import { Input } from '../../../../components/Input/Input';
import styles from './styles.module.css';

const Search = ({ handleSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const onFormSubmit = event => {
    event.preventDefault();
    if (!inputValue) {
      return;
    }
    handleSearchFormSubmit(inputValue);
  };

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleInputClear = () => {
    setInputValue('');
    handleSearchFormSubmit();
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <Input
        placeholderText='Enter course name or id...'
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button
        type='submit'
        buttonText='Search'
      />
      <Button
        type='text'
        buttonText='Clear'
        onClick={handleInputClear}
      />
    </form>
  );
};

export default Search;
