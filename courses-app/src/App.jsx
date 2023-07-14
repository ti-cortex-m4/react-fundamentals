import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { Registration } from "./components/Registration";
import { Courses } from "./components/Courses";
import { CourseInfo } from "./components/CourseInfo";
import { CourseForm } from "./components/CourseForm";
import { AnonymousRoute } from "./components/AnonymousRoute";
import { AuthenticatedRoute } from "./components/AuthenticatedRoute";
import { PrivateRoute } from "./components/PrivateRoute";
import { getUserFromLocalStorage } from "./helpers/localStorage";
import { fetchData } from './helpers/fetchData';
import { APPLICATION_PATHS, REQUEST_PATHS } from './constants';

/*TODO*/
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
      <Header isLogged={isLogged} setIsLogged={setIsLogged} />
      <Routes>
{/*         <Route */}
{/*           path={'/'} */}
{/*           element={<Navigate to={'/courses'} />} */}
        />
{/*         <Route */}
{/*           path={APPLICATION_PATHS.login} */}
{/*           element={<Login isLogged={isLogged} setIsLogged={setIsLogged} />} */}
{/*         /> */}
{/*         <Route */}
{/*           path={APPLICATION_PATHS.registration} */}
{/*           element={<Registration />} */}
{/*         /> */}

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
      </Routes>
    </div>
  );
}

export default App;
