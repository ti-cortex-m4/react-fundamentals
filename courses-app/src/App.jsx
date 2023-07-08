import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from "./components/Header";
import { Courses } from "./components/Courses";
import { CourseInfo } from "./components/CourseInfo";
import { APP_URL_PATHS } from './common/constants';

function App() {

  const {
    root,
    registration,
    login,
    courses,
    courseCreate,
    courseInfoId,
  } = APP_URL_PATHS;

  return (
    <div className='app'>
      <Header/>
      <Routes>
        <Route
          path={root}
          element={<Navigate to={courses} />}
        />
        <Route
          path={courses}
          element={ <Courses /> }
        />
        <Route
          path={courseInfoId}
          element={ <CourseInfo /> }
        />
      </Routes>
    </div>
  );
}

export default App;
