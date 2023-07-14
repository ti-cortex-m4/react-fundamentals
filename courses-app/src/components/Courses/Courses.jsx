import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../Button";
import { CourseCard } from "./components/CourseCard";
import { CourseCard } from "./components/Search";
import { fetchData } from '../../helpers/fetchData';
import { APP_URL_PATHS, APP_REQUEST_PATHS } from '../../constants';
import styles from './styles.module.css';

export const Courses = () => {
  const navigate = useNavigate();

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

  const handleCreateCourseButtonClick = () => {
    navigate(APP_URL_PATHS.createCourse);
  };

  const filterCourses = filterValue => {
    const value = filterValue.toLowerCase();

    return courseList.filter(({id, title}) => {
      return title.toLowerCase().includes(value) || id.includes(value);
    });
  };

  const handleSearchFormSubmit = searchValue => {
    if (searchValue) {
      const filteredCourses = filterCourses(searchValue);
      setFoundCourses(filteredCourses);
      return;
    }
    setFoundCourses();
  };

  return (
    <>
      <div className={styles.panel}>
        <Search handleSubmit={handleSearchFormSubmit}/>
      </div>
      <div className={styles.panel}>
        <Button
          buttonText='Add new course'
          handleClick={handleCreateCourseButtonClick}
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
