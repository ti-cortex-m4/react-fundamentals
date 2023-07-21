import AuthorItem from '../AuthorItem/AuthorItem';

import styles from './styles.module.css';

const Authors = ({
  authors,
  buttonText,
  handleButtonClick,
}) => {
  return (
    <div>
      {
        authors.map(({ id, name }) => (
          <AuthorItem
            authorId={id}
            authorName={name}
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
