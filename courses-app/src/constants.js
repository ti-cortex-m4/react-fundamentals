/*
export const BASE_URL = 'http://localhost:3000';
export const HOME_PATH = '/';
export const LOGIN_PATH = '/login';
export const LOGIN_RELATIVE_PATH = 'login';
export const REGISTRATION_PATH = '/registration';
export const REGISTRATION_RELATIVE_PATH = 'registration';
export const COURSES_PATH = '/courses';
export const COURSES_RELATIVE_PATH = 'courses';
export const ADD_COURSE_FORM_RELATIVE_PATH = 'add';
export const UPDATE_COURSE_FORM_RELATIVE_PATH = 'update';
export const COURSE_QUERY_PARAM = 'courseId';

export const REGISTRATION_ENDPOINT = '/register';
export const LOGIN_ENDPOINT = '/login';
export const LOGOUT_REQUEST = '/logout';
export const COURSES_ENDPOINT = '/courses';
export const COURSES_ALL_ENDPOINT = '/courses/all';
export const COURSE_ADD_ENDPOINT = '/courses/add';
export const COURSE_UPDATE_ENDPOINT = '/courses';
export const AUTHORS_ENDPOINT = '/authors/all';
export const AUTHORS_ADD_ENDPOINT = '/authors/add';
export const AUTHORS_DELETE_ENDPOINT = '/authors';
export const USER_ENDPOINT = '/users/me';
*/

/* TODO */ export const BACKEND_URL = 'http://localhost:4000';

export const BACKEND_PATHS = {
  register: '/register',
  login: '/login',
  getAllCourses: '/courses/all',
  addCourse: '/courses/add',
  getAllAuthors: '/authors/all',
  addAuthor: '/authors/add',
  userData: '/users/me',
  courseInfo: '/courses/',
};

/* TODO */ export const FRONTEND_PATHS = {
  root: '/',
  registration: '/registration',
  login: '/login',
  courses: '/courses',
  createCourse: '/courses/add',
  courseInfoId: '/courses/:courseId',
  courseInfo: '/courses/',
};
