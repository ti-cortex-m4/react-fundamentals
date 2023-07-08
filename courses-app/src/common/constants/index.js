export const HTTP_METHODS = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE'
};

export const AUTH_TOKEN_NAME = 'authToken';

export const SERVER_URL_BASE = 'http://localhost:3000';

export const APP_REQUEST_PATHS = {
  registration: '/register',
  login: '/login',
  coursesAll: '/courses/all',
  courseAdd: '/courses/add',
  authorsAll: '/authors/all',
  authorAdd: '/authors/add',
  userData: '/users/me',
  courseInfo: '/courses/',
};

export const APP_URL_PATHS = {
  root: '/',
  registration: '/registration',
  login: '/login',
  courses: '/courses',
  courseCreate: '/courses/add',
  courseInfoId: '/courses/:courseId',
  courseInfo: '/courses/',
};
