import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { Registration } from "./components/Registration";
import { Courses } from "./components/Courses";
import { CourseInfo } from "./components/CourseInfo";
import { CourseForm } from "./components/CourseForm";
import { getUserFromLocalStorage } from "./helpers/localStorage";
import { APP_URL_PATHS } from "./common/constants";

function App() {

  const {
    root,
    registration,
    login,
    courses,
    createCourse,
    courseInfoId,
  } = APP_URL_PATHS;

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const [authToken, userName] = getUserFromLocalStorage();
    if (authToken) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className='app'>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
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
        <Route
          path={createCourse}
          element={ isLoggedIn ? <CourseForm /> : <Navigate to={login} /> }
        />
      </Routes>
    </div>
  );
}

export default App;
