import { useState } from 'react';

import { Button } from '../../../../common/Button/Button';
import { Input } from '../../../../common/Input/Input';

import styles from './styles.module.css';

export const Search = ({ handleSearchChange }) => {
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
        type='submit'
        buttonText='Clear'
      />
    </form>
  );
};

export default Search;
