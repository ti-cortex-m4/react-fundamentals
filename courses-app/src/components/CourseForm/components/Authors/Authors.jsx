// import PropTypes from 'prop-types';
import { Button } from '../../../Button/Button';
import { AuthorItem } from "../AuthorItem/AuthorItem";
import { classNames } from '../../../../common/utils/helpers';
import styles from './styles.module.css';

const Authors = ({
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
{/*       <ul> */}
        {
          (authors.length > 0) &&
          authors.map(({ name, id }) => (
            <AuthorItem
              id={id}
              name={name}
              buttonText={buttonText}
              onButtonClick={() => onButtonClick(id)}
            />
//           } else {
//           <p className={styles.notification}>List is empty</p>
//           }
//           <li key={id}>
//             <h4>{name}</h4>
//             <Button
//               type='button'
//               buttonText={buttonText}
//               onClick={() => onButtonClick(id)}
//             />
//           </li>
          ))
        }
        {
          (authors.length == 0) &&
          <p className={styles.notification}>author list is empty</p>
        }
{/*       <ul> */}
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
