import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../components/Button/Button';
import { formatCourseDuration } from '../../../../helpers/formatCourseDuration';
import { formatCreationDate } from '../../../../helpers/formatCreationDate';
import { fetchData } from '../../../../common/utils/fetchData';
import { APP_URL_PATHS } from '../../../../constants';
import styles from './styles.module.css';

export const CourseCard = ({ course, authorsIdToName }) => {
  const {
    id,
    title,
    description,
    creationDate,
    duration,
    authors
  } = course;

  const formattedAuthors = authors
    .map(authorId => authorsIdToName.get(authorId))
    .join(', ');

  const navigate = useNavigate();

  const handleShowButtonClick = () => {
    navigate(`/courses/${id}`);
  };

  const handleUpdateButtonClick = () => {
    navigate(`/courses/update/${id}`);
  };

  const handleDeleteButtonClick = (id) => {
    const deleteCourse = async (id) => {
      const { response, error } = await fetchData({
        method: 'DELETE',
        url: '/courses/' + id,
      });

      if (!error && response.successful) {
        navigate(APP_URL_PATHS.courses);
      }
    };

    deleteCourse(id);
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardText}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.cardDetails}>
        <p>
          <b>Authors: </b>
          <span>{formattedAuthors}</span>
        </p>
        <p>
          <b>Duration: </b>
          <span>{formatCourseDuration(duration)}</span>
        </p>
        <p>
          <b>Created: </b>
          <span>{formatCreationDate(creationDate)}</span>
        </p>
        <div>

          <Button
            buttonText='Show course'
            handleClick={handleShowButtonClick}
          />
          <Button
            buttonText='Edit course'
            handleClick={handleUpdateButtonClick}
          />
          <Button
            buttonText='Delete course'
            handleClick={() => handleDeleteButtonClick(id)}
          />

        </div>
      </div>
    </div>
  );
};
