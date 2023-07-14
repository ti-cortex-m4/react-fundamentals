import { useState } from 'react';
import { Button } from '../../../../components/Button/Button';
import { Input } from '../../../../components/Input/Input';
import styles from './styles.module.css';

/* TODO */ export const Search = ({ handleSearchChange }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = event => {
    setSearchValue(event.target.value);
    handleSearchChange(searchValue);
  };

  const handleInputClear = event => {
    event.preventDefault();
    setSearchValue('');
    handleSearchChange();
  };

  return (
    <form className={styles.searchForm} onSubmit={handleInputClear}>
      <Input
        placeholderText='Enter course name or id...'
        type='text'
        name='searchValue'
        value={searchValue}
        valid={true}
        onChange={handleInputChange}
      />
      <Button
        type='text'
        buttonText='Clear'
      />
    </form>
  );
};

export default Search;
