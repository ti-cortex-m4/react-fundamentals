import React from 'react';

import styles from './styles.module.css';

export const CourseForm = () => {

	//write your code here
	
	return (
		<form onSubmit={handleSubmit}>
			<div>
				// reuse Input component for title field

				// reuse Button component for 'Save course' button
			</div>

			<label>
				Description
				<textarea/>
			</label>

			<div className={styles.infoWrapper}>
				<div>
					<div className={styles.newAuthorContainer}>
						// reuse Input component for new author field

						// reuse Button component for 'Create new author' button
					</div>

					// reuse Input component for duration field

					<p>Duration: </p>
				</div>

				<div className={styles.authorsContainer}>
					<strong>Authors</strong>

					// use 'map' to display all available autors. Reuse 'AuthorItem' component for each author

					<strong>Course authors</strong>

					// use 'map' to display course's autors. Reuse 'AuthorItem' component for each author

					<p className={styles.notification}>List is empty</p> // display this paragraph if there are no authors in the course
				</div>
			</div>
		</form>
	);
};
