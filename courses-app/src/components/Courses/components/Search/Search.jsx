import { useState } from 'react';
import { Button } from '../../../../components/Button/Button';
import { Input } from '../../../../components/Input/Input';
import styles from './styles.module.css';

export const Search = ({ handleSearchChange }) => {
  const [searchValue, setSearchValue] = useState('');

//   const handleSubmit = event => {
//     event.preventDefault();
//     if (searchValue) {
//       handleSearchChange(searchValue);
//     } else {
//       handleSearchChange();
//     }
//   };

  const handleInputChange = event => {
  setSearchValue(event.target.value);
//     if (searchValue) {
      handleSearchChange(searchValue);
//     } else {
//       handleSearchChange();
//     }
//     setSearchValue(event.target.value);
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
        handleChange={handleInputChange}
      />
      <Button
        type='text'
        buttonText='Clear'
//         onClick={handleInputClear}
      />
    </form>
  );
};

export default Search;
