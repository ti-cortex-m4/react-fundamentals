import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { mockAuthors, mockCourses } from '../../mocks';
import { Button } from "../Button";
import { CourseCard } from "./components/CourseCard";
import { APP_URL_PATHS } from '../../common/constants';
import styles from './styles.module.css';

export const Courses = () => {

    const navigate = useNavigate();

    const [authors, setAuthors] = useState(mockAuthors);
    const [courses, setCourses] = useState(mockCourses);

    const authorsIdToName = new Map(authors.map(author => [author.id, author.name]));

    const handleCreateCourseButtonClick = () => {
      navigate(APP_URL_PATHS.createCourse);
    };

	return (
		<>
			<div className={styles.panel}>
                <Button
                  buttonText='Add new course'
                  onClick={handleCreateCourseButtonClick}
                />
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
