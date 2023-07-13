import React from 'react';
import styles from './styles.module.css';

export const Input = ({
  labelText,
  placeholderText,
  type,
  name,
  value,
  valid,
  handleChange
}) => {
  const className = valid ? styles.valid : styles.invalid;

  return (
    <label>
      {labelText}
      <input
        className={className}
        placeholder={placeholderText}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};

export default Input;
