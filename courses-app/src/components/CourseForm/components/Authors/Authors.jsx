// import { Button } from '../../../Button/Button';
import { AuthorItem } from "../AuthorItem/AuthorItem";
// import { classNames } from '../../../../common/utils/helpers';
import styles from './styles.module.css';

const Authors = ({
  authors,
  buttonText,
  onButtonClick,
}) => {

  return (
    <div>
        {
          (authors.length > 0) &&
          authors.map(({ name, id }) => (
            <AuthorItem
              id={id}
              name={name}
              buttonText={buttonText}
              onButtonClick={() => onButtonClick(id)}
            />
          ))
        }
        {
          (authors.length === 0) &&
          <p className={styles.notification}>author list is empty</p>
        }
    </div>
  );
};

export default Authors;
