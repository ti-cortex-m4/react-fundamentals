import React from 'react';

import styles from './styles.module.css';

export const Input = ({
  placeholderText,
  labelText,
}) => (
<label>
	{labelText}
	<input placeholder={placeholderText} />
</label>
);
