import React from 'react';
import { useState } from "react";
import { mockAuthors, mockCourses } from '../../mocks';
import { CourseCard } from "./components/CourseCard";
import styles from './styles.module.css';

export const Courses = () => {

    const [authors, setAuthors] = useState(mockAuthors);
    const [courses, setCourses] = useState(mockCourses);

    const authorsIdToName = new Map(authors.map(author => [author.id, author.name]));

	return (
		<>
			<div className={styles.panel}>
				// reuse Button component for 'Add course' button
			</div>

		    {courses.map((course) => (
               <CourseCard
                key={course.id}
                  course={course}
                  authorsIdToName={authorsIdToName}
               />
            ))}
		</>
	);
};
