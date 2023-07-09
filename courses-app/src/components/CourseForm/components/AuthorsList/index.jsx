import PropTypes from 'prop-types';
import Button from '../../../Button';
import { classNames } from '../../../../common/utils/helpers';
import styles from './styles/AuthorsList.module.css';

const AuthorsList = ({
  title,
  authors,
  buttonTitle,
  onButtonClick,
}) => {
  const authorListClasses = {
    [styles.authorsList]: true,
    [styles.authorsListInvalid]: !authors.length,
  };

  return (
    <div className={styles.authorsListWrapper}>
      <h3 className={styles.authorsListTitle}>{title}</h3>
      <ul className={classNames(authorListClasses)}>
        {
          authors.map(({ name, id }) => (
          <li key={id} className={styles.authorsListItem}>
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

AuthorsList.propTypes = {
  title: PropTypes.string,
  authors: PropTypes.array,
  buttonTitle: PropTypes.string,
  onButtonClick: PropTypes.func,
};

export default AuthorsList;
