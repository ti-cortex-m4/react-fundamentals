import React from 'react';
import { getCourseDuration } from '../../../../helpers/getCourseDuration';
import { formatCreationDate } from '../../../../helpers/formatCreationDate';
import styles from './styles.module.css';

export const CourseCard = ({course, authorsIdToName}) => {

  const {
    title,
    description,
    creationDate,
    duration,
    authors
  } = course;

  const formattedAuthors = authors
    .map(authorId => authorsIdToName.get(authorId))
    .join(', ');

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
					
					// reuse Button component for 'Show course' button
					// reuse Button component for 'Delete course' button
					// reuse Button component for 'Edit course' button

				</div>
			</div>
		</div>
	);
};
