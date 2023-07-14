import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { formatCourseDuration } from '../../helpers/formatCourseDuration';
import { formatCreationDate } from '../../helpers/formatCreationDate';
import { fetchData } from '../../helpers/fetchData';
import { REQUEST_PATHS, APPLICATION_PATHS } from '../../constants';
import styles from './styles.module.css';

/* TODO */ export const CourseInfo = ({ allAuthors }) => {

  const { courseId } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState({
    id: '',
    creationDate: '',
    description: '',
    duration: 0,
    title: '',
    authors: [],
  });

  useEffect(() => {
    const getCourseInfo = async () => {
      const { response, error } = await fetchData({
        method: 'GET',
        url: REQUEST_PATHS.courseInfo + courseId,
      });

      if (!error && response.successful) {
        setCourse(response.result);
      }
    };

    getCourseInfo();
  }, []);

  const authorsIdToName = new Map(allAuthors.map(author => [author.id, author.name]));

  const handleBackButtonClick = () => {
    navigate('/courses');
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
            {course.duration ? formatCourseDuration(course.duration) : ''}
          </p>
          <p>
            <b>Created: </b>
            {course.creationDate ? formatCreationDate(course.creationDate) : ''}
          </p>
          <div>
            <b>Authors</b>
            <ul className={styles.authorsList}>
              {course.authors.map(id => <li key={id}>{authorsIdToName.get(id)}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseInfo;
