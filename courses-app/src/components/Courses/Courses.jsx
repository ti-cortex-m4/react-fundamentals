import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../Button";
import { CourseCard } from "./components/CourseCard";
import { Search } from "./components/Search";
import { fetchData } from '../../helpers/fetchData';
import { APP_URL_PATHS, APP_REQUEST_PATHS } from '../../constants';
import styles from './styles.module.css';

export const Courses = () => {
  const navigate = useNavigate();

  const [authors, setAuthors] = useState([]);
  const [courses, setCourses] = useState([]);
  const [foundCourses, setFoundCourses] = useState([]);

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
        setFoundCourses(response.result);
      }
    };

    getAllAuthors();
    getAllCourses();
  }, []);

  const authorsIdToName = new Map(authors.map(author => [author.id, author.name]));

  const handleCreateCourseButtonClick = () => {
    navigate(APP_URL_PATHS.createCourse);
  };

  const filterCourses = searchValue => {
    const value = searchValue.toLowerCase();

    return courses.filter(({id, title}) => {
      return title.toLowerCase().includes(value) || id.includes(value);
    });
  };

  const handleSearchFormSubmit = searchValue => {
    if (searchValue) {
      setFoundCourses(filterCourses(searchValue));
    } else {
      setFoundCourses(courses);
    }
  };

  return (
    <>
      <div className={styles.panel}>
        <Search handleSearchFormSubmit={handleSearchFormSubmit}/>
      </div>
      <div className={styles.panel}>
        <Button
          buttonText='Add new course'
          handleClick={handleCreateCourseButtonClick}
        />
      </div>

      {foundCourses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          authorsIdToName={authorsIdToName}
        />
      ))}
    </>
  );
};
