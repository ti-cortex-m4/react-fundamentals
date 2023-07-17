import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';
import { Courses } from './components/Courses/Courses';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { CourseForm } from './components/CourseForm/CourseForm';
import { AnonymousRoute } from './components/AnonymousRoute/AnonymousRoute';
import { AuthenticatedRoute } from './components/AuthenticatedRoute/AuthenticatedRoute';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { getAuthTokenFromLocalStorage } from './helpers/localStorage';
import { getAllAuthors } from './services/author';
import { getAllCourses } from './services/course';
import { FRONTEND_PATHS } from './constants';

import { saveCoursesAction } from './_store/courses/actions';
import { saveAuthorsAction } from './_store/authors/actions';

function App() {
  const dispatch = useDispatch();

  const [isLogged, setIsLogged] = useState(false);

//   const [allAuthors, setAllAuthors] = useState([]);
//   const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    const authToken = getAuthTokenFromLocalStorage();
    if (authToken) {
      setIsLogged(true);
    }
  }, []);

  useEffect(() => {
    getAllAuthors(
      (response, error) => {
        setAllAuthors(response.result)
      },
      (response, error) => { }
    );
    getAllCourses(
      (response, error) => {
        setAllCourses(response.result)
      },
      (response, error) => { }
    );

    const getAuthors = async () => {
      const response = await apiService.getAuthors();
      const data = await response.json();
      dispatch(saveAuthorsAction(data.result));
    };

    const getAllCourses = async () => {
      const response = await apiService.getCourses();
      const data = await response.json();
      dispatch(saveCoursesAction(data.result));
    };

    getAllAuthors();
    getAllCourses();
  }, [dispatch]);

  return (
    <div className='app'>
      <Header isLogged={isLogged} setIsLogged={setIsLogged} />

      <Routes>
        <Route path={FRONTEND_PATHS.login} element={<AnonymousRoute />} >
          <Route path='' element={<Login isLogged={isLogged} setIsLogged={setIsLogged} />} />
        </Route>
        <Route path={FRONTEND_PATHS.registration} element={<AnonymousRoute />} >
          <Route path='' element={<Registration />} />
        </Route>

        <Route path={FRONTEND_PATHS.courses} element={<AuthenticatedRoute />} >
          <Route path='' element={<Courses allAuthors={allAuthors} />} />
        </Route>
        <Route path={'/courses/:courseId'} element={<AuthenticatedRoute />} >
          <Route path='' element={<CourseInfo allAuthors={allAuthors} />} />
        </Route>

        <Route path={FRONTEND_PATHS.createCourse} element={<PrivateRoute />} >
          <Route path='' element={<CourseForm />} />
        </Route>
        <Route path={'/courses/update/:courseId'} element={<PrivateRoute />} >
          <Route path='' element={<CourseForm />} />
        </Route>

        <Route path={'*'} element={<Navigate to={FRONTEND_PATHS.courses} />} />
      </Routes>
    </div>
  );
}

export default App;
