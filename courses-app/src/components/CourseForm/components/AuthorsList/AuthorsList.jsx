import PropTypes from 'prop-types';
import {Button} from '../../../Button/Button';
import { classNames } from '../../../../common/utils/helpers';
// import styles from './styles/AuthorsList.module.css';

export const AuthorsList = ({
  title,
  authors,
  buttonTitle,
  onButtonClick,
}) => {
//   const authorListClasses = {
//     [styles.authorsList]: true,
//     [styles.authorsListInvalid]: !authors.length,
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
              onClick={() => onButtonClick(id)}
            >
              {buttonTitle}
            </Button>
          </li>
          ))
        }
      </ul>
    </div>
  );
};

// AuthorsList.propTypes = {
//   title: PropTypes.string,
//   authors: PropTypes.array,
//   buttonTitle: PropTypes.string,
//   onButtonClick: PropTypes.func,
// };
//
// export default AuthorsList;
