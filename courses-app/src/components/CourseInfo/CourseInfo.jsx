import React from 'react';
import { getCourseDuration, formatCreationDate } from '../../helpers/time';
import styles from './styles.module.css';

export const CourseInfo = () => {

	// write your code here

	return (
		<>
			// use 'react-router-dom' 'Link' component for button 'Back'

			<h1>Course title</h1>
			<div className={styles.courseInfo}>
				{/* <p className={styles.description}>{description}</p> */}
				<div>
					<p>
						<b>ID: </b>
						id
					</p>
					<p>
						<b>Duration: </b>
{/* 						{getCourseDuration(duration)} */}
					</p>
					<p>
						<b>Created: </b>
{/* 						{formatCreationDate(creationDate)} */}
					</p>
					<div>
						<b>Authors</b>
						{/* <ul className={styles.authorsList}>
							//use '.map' to render authors list with 'li' tag
						</ul> */}
					</div>
				</div>
			</div>
		</>
	);
};
