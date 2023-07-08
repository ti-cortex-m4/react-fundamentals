import React from 'react';

export const CourseCard = () => {

		// write your code here

	return (
		<div className={styles.cardContainer}>
			<div className={styles.cardText}>
				<h2>Title</h2>
				<p>Description</p>
			</div>
			<div className={styles.cardDetails}>
				<p>
					<b>Authors: </b>
					authors list
				</p>
				<p>
					<b>Duration:</b>
					<span>duration</span>
				</p>
				<p>
					<b>Created: </b>
					<span>date</span>
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
