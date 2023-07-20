import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Button } from '../../common/Button/Button';
import { formatCourseDuration } from '../../helpers/formatCourseDuration';
import { formatCreationDate } from '../../helpers/formatCreationDate';
import { APPLICATION_PATHS } from '../../constants';

import { getAuthorsSelector } from '../../store/authors/selectors';
import { getCoursesSelector } from '../../store/courses/selectors';

import styles from './styles.module.css';

export const CourseInfo = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();

  const allAuthors = useSelector(getAuthorsSelector);
  const allCourses = useSelector(getCoursesSelector);

  const authorIdsToNames = new Map(allAuthors.map(author => [author.id, author.name]));
  const course = allCourses.find((course) => course.id === courseId);

  const handleBackButtonClick = () => {
    navigate(APPLICATION_PATHS.courses);
  };

  return (
    <>
      <Button
        buttonText='Back'
        onClick={handleBackButtonClick}
      />

      <h1>{course.title}</h1>
      <div className={styles.courseInfo}>
        <p className={styles.description}>{course.description}</p>
        <div>
          <p>
            <b>Id: </b>
            {course.id}
          </p>
          <p>
            <b>Duration: </b>
            {formatCourseDuration(course.duration)}
          </p>
          <p>
            <b>Created: </b>
            {formatCreationDate(course.creationDate)}
          </p>
          <div>
            <b>Authors</b>
            <ul className={styles.authorsList}>
              {course.authors.map(authorId => <li key={authorId}>{authorIdsToNames.get(authorId)}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseInfo;
