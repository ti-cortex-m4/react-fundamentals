import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { getCourseDuration, formatCreationDate } from '../../helpers/time';
import { fetchData } from '../../common/utils/fetchData';
import {
  APP_REQUEST_PATHS,
  APP_URL_PATHS,
} from '../../common/constants';
import styles from './styles.module.css';

export const CourseInfo = () => {
  const initialCourseInfo = {
    id: '',
    creationDate: '',
    description: '',
    duration: 0,
    title: '',
    authors: [],
  }

   const [allAuthors, setAllAuthors] = useState([]);
  const [course, setCourse] = useState(initialCourseInfo);

  const { courseId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getCourseInfo = async () => {
      const { successful, result, error } = await fetchData({
        url: APP_REQUEST_PATHS.courseInfo + courseId,
      });

      if (!error && successful) {
        setCourse(result);
      }
    };

    const getAllAuthors = async () => {
      const { successful, result, error } = await fetchData({
        url: APP_REQUEST_PATHS.getAllAuthors,
      });

      if (!error && successful) {
        setAllAuthors(result);
      }
    };

    getAllAuthors();
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
{getCourseDuration(course.duration)}
					</p>
					<p>
						<b>Created: </b>{course.creationDate}
{/* {formatCreationDate(course.creationDate)} */}
					</p>
					<div>
						<b>Authors</b>
						<ul className={styles.authorsList}>
// 							{course.authors.map(authorId => authorsIdToName.get(authorId)).map(({ name, id }) => <li key={id}>{name}</li>)}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default CourseInfo;
