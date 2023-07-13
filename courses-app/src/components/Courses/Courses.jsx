import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../Button";
import { CourseCard } from "./components/CourseCard";
import { fetchData } from '../../common/utils/fetchData';
import {
  APP_URL_PATHS,
  APP_REQUEST_PATHS
} from '../../common/constants';
import styles from './styles.module.css';

export const Courses = () => {
  const [authors, setAuthors] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getAllAuthors = async () => {
      const { response, error } = await fetchData({
        method: 'GET',
        url: APP_REQUEST_PATHS.getAllAuthors,
      });

      if (!error && response.successful) {
        setAuthors(response.result);
      }
    };

    const getAllCourses = async () => {
      const { response, error } = await fetchData({
        method: 'GET',
        url: APP_REQUEST_PATHS.getAllCourses,
      });

      if (!error && response.successful) {
        setCourses(response.result);
      }
    };

    getAllAuthors();
    getAllCourses();
  }, []);

  const authorsIdToName = new Map(authors.map(author => [author.id, author.name]));

  const navigate = useNavigate();

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
