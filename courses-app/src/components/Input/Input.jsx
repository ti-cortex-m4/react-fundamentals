import React from 'react';

import styles from './styles.module.css';

export const Input = ({
  labelText,
  placeholderText,
  name,
  value,
  onChange
}) => (
<label>
	{labelText}
	<input
	  placeholder={placeholderText}
	  name={name}
	  value={value}
	  onChange={onChange}
	/>
</label>
);
