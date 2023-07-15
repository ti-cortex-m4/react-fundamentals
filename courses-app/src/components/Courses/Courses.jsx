import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../common/Button/Button';
import { CourseCard } from './components/CourseCard/CourseCard';
import { Search } from './components/Search/Search';
import { FRONTEND_PATHS } from '../../constants';
import { getAllAuthors } from '../../services/author';
import { getAllCourses } from '../../services/course';

import styles from './styles.module.css';

/* TODO */ export const Courses = () => {
  const navigate = useNavigate();

  const [allAuthors, setAllAuthors] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [foundCourses, setFoundCourses] = useState([]);

  useEffect(() => {
    getAllAuthors(
      (response, error) => { setAllAuthors(response.result) },
      (response, error) => { }
    );
    getAllCourses(
      (response, error) => { setAllCourses(response.result); setFoundCourses(response.result); },
      (response, error) => { }
    );
  }, []);

  const handleCreateCourseButtonClick = () => {
    navigate(FRONTEND_PATHS.createCourse);
  };

  const handleSearchChange = searchValue => {
    if (searchValue) {
      setFoundCourses(allCourses.filter(({ id, title }) => (title.toLowerCase().includes(searchValue.toLowerCase()) || id.includes(searchValue.toLowerCase()))));
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
      {
        foundCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            authorIdsToNames={new Map(allAuthors.map(author => [author.id, author.name]))}
          />
        ))
      }
    </>
  );
};

export default Courses;
