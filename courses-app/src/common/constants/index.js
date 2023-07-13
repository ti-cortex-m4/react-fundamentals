export const SERVER_URL_BASE = 'http://localhost:4000';

export const APP_REQUEST_PATHS = {
  registration: '/register',
  login: '/login',
  getAllCourses: '/courses/all',
  addCourse: '/courses/add',
  getAllAuthors: '/authors/all',
  addAuthor: '/authors/add',
  userData: '/users/me',
  courseInfo: '/courses/',
};

export const APP_URL_PATHS = {
  root: '/',
  registration: '/registration',
  login: '/login',
  courses: '/courses',
  createCourse: '/courses/add',
  courseInfoId: '/courses/:courseId',
  courseInfo: '/courses/',
};
