import { useState } from 'react';
import { Button } from '../../../../components/Button/Button';
import { Input } from '../../../../components/Input/Input';
import styles from './styles.module.css';

export const Search = ({ handleSearchFormSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (searchValue) {
      handleSearchFormSubmit(searchValue);
    } else {
      handleSearchFormSubmit();
    }
  };

  const handleInputChange = event => {
    setSearchValue(event.target.value);
  };

  const handleInputClear = () => {
    setSearchValue('');
    handleSearchFormSubmit();
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <Input
        placeholderText='Enter course name or id...'
        type='text'
        name='searchValue'
        value={searchValue}
        valid={true}
        handleChange={handleInputChange}
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
