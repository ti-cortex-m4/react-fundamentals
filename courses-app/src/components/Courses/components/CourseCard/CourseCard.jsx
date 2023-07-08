import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../components/Button/Button';
import { getCourseDuration } from '../../../../helpers/getCourseDuration';
import { formatCreationDate } from '../../../../helpers/formatCreationDate';
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

  const navigate = useNavigate();

  const formattedAuthors = authors
    .map(authorId => authorsIdToName.get(authorId))
    .join(', ');

  const handleShowButtonClick = () => {
	navigate(APP_URL_PATHS.courseInfo + id);
  };

  const handleUpdateButtonClick = () => {
  };

  const handleDeleteButtonClick = () => {
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
                    handleClick={handleShowButtonClick}
                  />
                  <Button
                    buttonText='Edit course'
                    handleClick={handleUpdateButtonClick}
                  />
                  <Button
                    buttonText='Delete course'
                    handleClick={handleDeleteButtonClick}
                  />

				</div>
			</div>
		</div>
	);
};
