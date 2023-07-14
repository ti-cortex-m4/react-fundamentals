import { AuthorItem } from '../AuthorItem/AuthorItem';
import styles from './styles.module.css';

/* TODO */ export const Authors = ({
  authors,
  buttonText,
  handleButtonClick,
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
            handleButtonClick={() => handleButtonClick(id)}
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
