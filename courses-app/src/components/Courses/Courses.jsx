import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../Button";
import { CourseCard } from "./components/CourseCard";
import { Search } from "./components/Search";
import { fetchData } from '../../helpers/fetchData';
import { APPLICATION_PATHS, REQUEST_PATHS } from '../../constants';
import styles from './styles.module.css';

/* TODO */ export const Courses = () => {
  const navigate = useNavigate();

  const [allAuthors, setAllAuthors] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [foundCourses, setFoundCourses] = useState([]);

  useEffect(() => {
    const getAllAuthors = async () => {
      const { response, error } = await fetchData({
        method: 'GET',
        url: REQUEST_PATHS.getAllAuthors,
      });

      if (!error && response.successful) {
        setAllAuthors(response.result);
      }
    };

    const getAllCourses = async () => {
      const { response, error } = await fetchData({
        method: 'GET',
        url: REQUEST_PATHS.getAllCourses,
      });

      if (!error && response.successful) {
        setAllCourses(response.result);
        setFoundCourses(response.result);
      }
    };

    getAllAuthors();
    getAllCourses();
  }, []);

  const handleCreateCourseButtonClick = () => {
    navigate(APPLICATION_PATHS.createCourse);
  };

  const handleSearchChange = searchValue => {
    if (searchValue) {
      setFoundCourses( allCourses.filter(({ id, title }) => (title.toLowerCase().includes(searchValue.toLowerCase()) || id.includes(searchValue.toLowerCase()))) );
    } else {
      setFoundCourses(allCourses);
    }
  };

  return (
    <>
      <div className={styles.panel}>
        <Search handleSearchChange={handleSearchChange} />
      </div>
      <div className={styles.panel}>
        <Button
          buttonText='Add new course'
          onClick={handleCreateCourseButtonClick}
        />
      </div>
      {foundCourses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          authorsIdToName={new Map(allAuthors.map(author => [author.id, author.name]))}
        />
      ))}
    </>
  );
};

export default Courses;
