import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Input } from '../../../../common/Input/Input';
import { Button } from '../../../../common/Button/Button';
// import { fetchData } from '../../../../helpers/fetchData';

import { addAuthorThunk } from '../../../../store/authors/thunk';
// import { BACKEND_PATHS } from '../../../../constants';

import styles from './styles.module.css';

/* TODO */ export const CreateAuthor = (/*{ setIsAuthorAdded }*/) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const handleCreateAuthorClick = () => {
    dispatch(addAuthorThunk(name));
//     if (author) {
//       const { response, error } = await fetchData({
//         method: 'POST',
//         url: BACKEND_PATHS.addAuthor,
//         body: { name: author },
//       });
//
//       if (!error && response.successful) {
//         setIsAuthorAdded(true);
//         setAuthor('');
//       }
//     }
  };

  const handleAuthorChange = event => {
    setName(event.target.value);
  };

  return (
    <div className={styles.newAuthorContainer}>
      <strong>Create author</strong>
      <div>
        <Input
          labelText='Author name'
          placeholderText='Enter author name...'
          type='text'
          name='name'
          value={name}
          valid={true}
          onChange={handleAuthorChange}
        />
        <Button
          buttonText='Create author'
          onClick={handleCreateAuthorClick}
        />
      </div>
    </div>
  );
};

export default CreateAuthor;
