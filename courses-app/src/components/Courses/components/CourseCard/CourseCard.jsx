import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../components/Button/Button';
import { formatCourseDuration } from '../../../../helpers/formatCourseDuration';
import { formatCreationDate } from '../../../../helpers/formatCreationDate';
import { fetchData } from '../../../../helpers/fetchData';
import { APPLICATION_PATHS } from '../../../../constants';
import styles from './styles.module.css';

/* TODO */ export const CourseCard = ({ course, authorIdsToNames }) => {
  const {
    id,
    title,
    description,
    creationDate,
    duration,
    authors
  } = course;

  const formattedAuthors = authors
    .map(authorId => authorIdsToNames.get(authorId))
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
        navigate(APPLICATION_PATHS.courses);
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
            onClick={handleShowButtonClick}
          />
          <Button
            buttonText='Edit course'
            onClick={handleUpdateButtonClick}
          />
          <Button
            buttonText='Delete course'
            onClick={() => handleDeleteButtonClick(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
