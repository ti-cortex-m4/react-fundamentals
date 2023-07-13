import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { Registration } from "./components/Registration";
import { Courses } from "./components/Courses";
import { CourseInfo } from "./components/CourseInfo";
import { CourseForm } from "./components/CourseForm";
import { getUserFromLocalStorage } from "./helpers/localStorage";
import { fetchData } from './common/utils/fetchData';
import {
  APP_URL_PATHS,
  APP_REQUEST_PATHS
} from './common/constants';
// import { APP_URL_PATHS } from "./common/constants";

function App() {
//
//   const {
//     root,
//     registration,
//     login,
//     courses,
//     createCourse,
//     courseInfoId,
//   } = APP_URL_PATHS;

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [allAuthors, setAllAuthors] = useState([]);
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    const [authToken, userName] = getUserFromLocalStorage();
    if (authToken) {
      setIsLoggedIn(true);
    }

    const getAllAuthors = async () => {
      const { successful, result, error } = await fetchData({
        url: APP_REQUEST_PATHS.getAllAuthors,
      });

      if (!error && successful) {
        setAllAuthors(result);
      }
    };

    const getAllCourses = async () => {
      const { successful, result, error } = await fetchData({
        url: APP_REQUEST_PATHS.getAllCourses,
      });

      if (!error && successful) {
        setAllCourses(result);
      }
    };

    getAllAuthors();
    getAllCourses();
  }, []);

  return (
    <div className='app'>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route
          path={'/'}
          element={<Navigate to={'/courses'} />}
        />
        <Route
          path={'/login'}
          element={ <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> }
        />
        <Route
          path={'/registration'}
          element={ <Registration /> }
        />
        <Route
          path={'/courses'}
          element={ isLoggedIn ? <Courses /> : <Navigate to={'/login'} /> }
        />
        <Route
          path={'/courses/:courseId'}
          element={ <CourseInfo allAuthors={allAuthors} /> }
        />
        <Route
          path={'/courses/add'}
          element={ isLoggedIn ? <CourseForm allAuthors={allAuthors} allCourses={allCourses}/> : <Navigate to={'/login'} /> }
        />
        <Route
          path={'/courses/update/:courseId'}
          element={ isLoggedIn ? <CourseForm allAuthors={allAuthors} allCourses={allCourses}/> : <Navigate to={'/login'} /> }
        />
      </Routes>
    </div>
  );
}

export default App;
