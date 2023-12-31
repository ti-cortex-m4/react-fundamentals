import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../common/Button/Button';
import { CourseCard } from './components/CourseCard/CourseCard';
import { Search } from './components/Search/Search';
import { FRONTEND_PATHS } from '../../constants';

import styles from './styles.module.css';

export const Courses = ({ allAuthors, allCourses }) => {
  const navigate = useNavigate();

  const [foundCourses, setFoundCourses] = useState();

  const handleCreateCourseButtonClick = () => {
    navigate(FRONTEND_PATHS.createCourse);
  };

  const handleSearchChange = searchValue => {
    if (searchValue) {
      setFoundCourses(allCourses.filter(({ id, title }) => (title.toLowerCase().includes(searchValue.toLowerCase()) || id.includes(searchValue.toLowerCase()))));
    } else {
      setFoundCourses();
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
        (foundCourses || allCourses).map((course) => (
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
