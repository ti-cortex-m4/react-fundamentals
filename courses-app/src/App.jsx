import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';
import { Courses } from './components/Courses';
import { CourseInfo } from './components/CourseInfo';
import { CourseForm } from './components/CourseForm';
import { AnonymousRoute } from './components/AnonymousRoute/AnonymousRoute';
import { AuthenticatedRoute } from './components/AuthenticatedRoute/AuthenticatedRoute';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { getAuthTokenFromLocalStorage } from './helpers/localStorage';
import { getAllAuthors } from './services/author';
import { getAllCourses } from './services/course';
import { fetchData } from './helpers/fetchData';
import { APPLICATION_PATHS, REQUEST_PATHS } from './constants';

/*TODO*/
function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [allAuthors, setAllAuthors] = useState([]);
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    const authToken = getAuthTokenFromLocalStorage();
    if (authToken) {
      setIsLogged(true);
    }

    getAllAuthors(
     (response, error) => {setAllAuthors(response.result)},
     (response, error) => {}
    );
    getAllCourses(
     (response, error) => {setAllCourses(response.result)},
     (response, error) => {}
    );
  }, []);

  return (
    <div className='app'>
      <Header isLogged={isLogged} setIsLogged={setIsLogged} />

      <Routes>
        <Route path={APPLICATION_PATHS.login} element={<AnonymousRoute />} >
          <Route path='' element={<Login isLogged={isLogged} setIsLogged={setIsLogged} />} />
        </Route>
        <Route path={APPLICATION_PATHS.registration} element={<AnonymousRoute />} >
          <Route path='' element={<Registration />} />
        </Route>

        <Route path={'/courses'} element={<AuthenticatedRoute />} >
          <Route path='' element={<Courses />} />
        </Route>
        <Route path={'/courses/:courseId'} element={<AuthenticatedRoute />} >
          <Route path='' element={<CourseInfo allAuthors={allAuthors} />} />
        </Route>

        <Route path={'/courses/add'} element={<PrivateRoute />} >
          <Route path='' element={<CourseForm allAuthors={allAuthors} allCourses={allCourses} />} />
        </Route>
        <Route path={'/courses/update/:courseId'} element={<PrivateRoute />} >
          <Route path='' element={<CourseForm allAuthors={allAuthors} allCourses={allCourses} />} />
        </Route>

        <Route path={'*'} element={<Navigate to={'/courses'} />} />
      </Routes>
    </div>
  );
}

export default App;
