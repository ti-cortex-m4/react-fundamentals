import PropTypes from 'prop-types';
import {Button} from '../../../Button/Button';
import { classNames } from '../../../../common/utils/helpers';
// import styles from './styles/Authors.module.css';

export const Authors = ({
  title,
  authors,
  buttonText,
  onButtonClick,
}) => {
//   const authorListClasses = {
//     [styles.Authors]: true,
//     [styles.AuthorsInvalid]: !authors.length,
//   };

  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {
          authors.map(({ name, id }) => (
          <li key={id}>
            <h4>{name}</h4>
            <Button
              type='button'
              buttonText={buttonText}
              onClick={() => onButtonClick(id)}
            />
          </li>
          ))
        }
      </ul>
    </div>
  );
};

// Authors.propTypes = {
//   title: PropTypes.string,
//   authors: PropTypes.array,
//   buttonText: PropTypes.string,
//   onButtonClick: PropTypes.func,
// };
//
export default Authors;
