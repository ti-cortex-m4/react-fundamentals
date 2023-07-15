import React from 'react';

import styles from './styles.module.css';

export const Textarea = ({
  labelText,
  placeholderText,
  name,
  value,
  valid,
  onChange
}) => {
  const className = valid ? styles.valid : styles.invalid;

  return (
    <label>
      {labelText}
      <textarea
        className={className}
        placeholder={placeholderText}
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Textarea;
