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

  const [isLogged, setIsLogged] = useState(false);
  const [allAuthors, setAllAuthors] = useState([]);
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    const [authToken, userName] = getUserFromLocalStorage();
    if (authToken) {
      setIsLogged(true);
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
      <Header isLogged={isLogged} setIsLogged={setIsLogged}/>
      <Routes>
        <Route
          path={'/'}
          element={<Navigate to={'/courses'} />}
        />
        <Route
          path={APP_URL_PATHS.login}
          element={ <Login isLogged={isLogged} setIsLogged={setIsLogged} /> }
        />
        <Route
          path={APP_URL_PATHS.registration}
          element={ <Registration /> }
        />
        <Route
          path={'/courses'}
          element={ isLogged ? <Courses /> : <Navigate to={APP_URL_PATHS.login} /> }
        />
        <Route
          path={'/courses/:courseId'}
          element={ <CourseInfo allAuthors={allAuthors} /> }
        />
        <Route
          path={'/courses/add'}
          element={ isLogged ? <CourseForm allAuthors={allAuthors} allCourses={allCourses}/> : <Navigate to={APP_URL_PATHS.login} /> }
        />
        <Route
          path={'/courses/update/:courseId'}
          element={ isLogged ? <CourseForm allAuthors={allAuthors} allCourses={allCourses}/> : <Navigate to={APP_URL_PATHS.login} /> }
        />
      </Routes>
    </div>
  );
}

export default App;
