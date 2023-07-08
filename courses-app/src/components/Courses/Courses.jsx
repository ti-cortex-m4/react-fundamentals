import React from 'react';
import { useState } from "react";
import { mockCourses } from '../../mocks';
import { CourseCard } from "./components/CourseCard";
import styles from './styles.module.css';

export const Courses = () => {

    const [courses, setCourses] = useState(mockCourses);

	return (
		<>
			<div className={styles.panel}>
				// reuse Button component for 'Add course' button
			</div>

		    {courses.map((course) => (
               <CourseCard
                  {...course}
               />
            ))}
		</>
	);
};
