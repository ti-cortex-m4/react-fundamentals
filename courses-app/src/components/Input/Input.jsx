import React from 'react';

import styles from './styles.module.css';

export const Input = ({
  labelText,
  placeholderText,
  name,
  value,
  valid,
  onChange
}) => (
<label>
	{labelText}
	<input
	      className={
            valid ? 'valid' : 'invalid'
          }
	  placeholder={placeholderText}
	  name={name}
	  value={value}
	  onChange={onChange}
	/>
</label>
);
