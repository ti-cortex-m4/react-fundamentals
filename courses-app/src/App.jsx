import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { Registration } from "./components/Registration";
import { Courses } from "./components/Courses";
import { CourseInfo } from "./components/CourseInfo";
import { manageLocalStorage } from "./common/utils/manageLocalStorage";
import { AUTH_TOKEN_NAME, APP_URL_PATHS } from "./common/constants";

function App() {

  const {
    root,
    registration,
    login,
    courses,
    courseCreate,
    courseInfoId,
  } = APP_URL_PATHS;

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const [token] = manageLocalStorage(AUTH_TOKEN_NAME);
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className='app'>
      <Header/>
      <Routes>
        <Route
          path={root}
          element={<Navigate to={courses} />}
        />
        <Route
          path={login}
          element={ <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> }
        />
        <Route
          path={registration}
          element={ <Registration /> }
        />
        <Route
          path={courses}
          element={ isLoggedIn ? <Courses /> : <Navigate to={login} /> }
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
