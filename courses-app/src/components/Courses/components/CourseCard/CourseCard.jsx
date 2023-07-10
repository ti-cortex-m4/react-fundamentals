import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../components/Button/Button';
import { getCourseDuration, formatCreationDate } from '../../../../helpers/time';
import { fetchData } from '../../../../common/utils/fetchData';
import { APP_URL_PATHS } from '../../../../common/constants';
import styles from './styles.module.css';

export const CourseCard = ({course, authorsIdToName}) => {
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
	navigate(APP_URL_PATHS.courseInfo + id);
  };

  const handleUpdateButtonClick = () => {
  };

  const handleDeleteButtonClick = (id) => {
  console.log('deleteCourse1'+id);

    const deleteCourse = async (id) => {
      console.log('deleteCourse2'+id);

      const { successful, error } = await fetchData({
        method: 'DELETE',
        url: '/courses/'+id,
      });

      console.log('finish');
      if (!error && successful) {
      console.log('navigate');
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
					<span>{getCourseDuration(duration)}</span>
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
