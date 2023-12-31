import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../../common/Button/Button';
import { formatCourseDuration } from '../../../../helpers/formatCourseDuration';
import { formatCreationDate } from '../../../../helpers/formatCreationDate';
import { isAdministrator } from '../../../../helpers/authentification';
import { deleteCourse } from '../../../../services/course';
import { FRONTEND_PATHS } from '../../../../constants';

import styles from './styles.module.css';

export const CourseCard = ({ course, authorIdsToNames }) => {
  const {
    id,
    title,
    description,
    creationDate,
    duration,
    authors
  } = course;

  const navigate = useNavigate();

  const handleShowButtonClick = () => {
    navigate(`/courses/${id}`);
  };

  const handleUpdateButtonClick = () => {
    navigate(`/courses/update/${id}`);
  };

  const handleDeleteButtonClick = (courseId) => {
    deleteCourse(
      courseId,
      (response, error) => { navigate(FRONTEND_PATHS.courses) },
      (response, error) => { }
    );
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
          <span>{authors.map(authorId => authorIdsToNames.get(authorId)).join(', ')}</span>
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
          {
            isAdministrator() &&
            <Button
              buttonText='Edit course'
              onClick={handleUpdateButtonClick}
            />
          }
          {
            isAdministrator() &&
            <Button
              buttonText='Delete course'
              onClick={() => handleDeleteButtonClick(id)}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
