import { AuthorItem } from "../AuthorItem/AuthorItem";
import styles from './styles.module.css';

export const Authors = ({
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
