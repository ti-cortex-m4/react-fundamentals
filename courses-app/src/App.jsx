import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { Registration } from "./components/Registration";
import { Courses } from "./components/Courses";
import { CourseInfo } from "./components/CourseInfo";
import { CourseForm } from "./components/CourseForm";
import { getUserFromLocalStorage } from "./helpers/localStorage";
import { fetchData } from './helpers/fetchData';
import { APPLICATION_PATHS, REQUEST_PATHS} from './constants';
// import { APPLICATION_PATHS } from "./constants";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [allAuthors, setAllAuthors] = useState([]);
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    const [authToken, userName] = getUserFromLocalStorage();
    if (authToken) {
      setIsLogged(true);
    }

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
          path={APPLICATION_PATHS.login}
          element={ <Login isLogged={isLogged} setIsLogged={setIsLogged} /> }
        />
        <Route
          path={APPLICATION_PATHS.registration}
          element={ <Registration /> }
        />
        <Route
          path={'/courses'}
          element={ isLogged ? <Courses /> : <Navigate to={APPLICATION_PATHS.login} /> }
        />
        <Route
          path={'/courses/:courseId'}
          element={ <CourseInfo allAuthors={allAuthors} /> }
        />
        <Route
          path={'/courses/add'}
          element={ isLogged ? <CourseForm allAuthors={allAuthors} allCourses={allCourses}/> : <Navigate to={APPLICATION_PATHS.login} /> }
        />
        <Route
          path={'/courses/update/:courseId'}
          element={ isLogged ? <CourseForm allAuthors={allAuthors} allCourses={allCourses}/> : <Navigate to={APPLICATION_PATHS.login} /> }
        />
      </Routes>
    </div>
  );
}

export default App;
