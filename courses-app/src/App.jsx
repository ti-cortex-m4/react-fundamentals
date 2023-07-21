import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';
import { Courses } from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';
import { CourseForm } from './components/CourseForm/CourseForm';
import AnonymousRoute from './components/AnonymousRoute/AnonymousRoute';
import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { getAuthTokenFromLocalStorage } from './helpers/localStorage';
import {
  REGISTER_PATH,
  LOGIN_PATH,
  COURSES_PATH,
  COURSE_INFO_PATH,
  CREATE_COURSE_PATH,
  UPDATE_COURSE_PATH
} from './constants';

import { getAllAuthorsThunk } from './store/authors/thunk';
import { getAllCoursesThunk } from './store/courses/thunk';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAuthorsThunk());
    dispatch(getAllCoursesThunk());
  }, [dispatch]);

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const authToken = getAuthTokenFromLocalStorage();
    if (authToken) {
      setIsLogged(true);
    }
  }, []);

  return (
    <div className='app'>
      <Header isLogged={isLogged} setIsLogged={setIsLogged} />

      <Routes>
        <Route path={LOGIN_PATH} element={<AnonymousRoute />} >
          <Route path='' element={<Login isLogged={isLogged} setIsLogged={setIsLogged} />} />
        </Route>
        <Route path={REGISTER_PATH} element={<AnonymousRoute />} >
          <Route path='' element={<Registration />} />
        </Route>

        <Route path={COURSES_PATH} element={<AuthenticatedRoute />} >
          <Route path='' element={<Courses />} />
        </Route>
        <Route path={COURSE_INFO_PATH} element={<AuthenticatedRoute />} >
          <Route path='' element={<CourseInfo />} />
        </Route>

        <Route path={CREATE_COURSE_PATH} element={<PrivateRoute />} >
          <Route path='' element={<CourseForm />} />
        </Route>
        <Route path={UPDATE_COURSE_PATH} element={<PrivateRoute />} >
          <Route path='' element={<CourseForm />} />
        </Route>

        <Route path={'*'} element={<Navigate to={COURSES_PATH} />} />
      </Routes>
    </div>
  );
}

export default App;
