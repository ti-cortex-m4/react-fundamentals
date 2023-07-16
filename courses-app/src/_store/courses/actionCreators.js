import {
  COURSES_ADD_TO_STORE,
  COURSES_CREATE,
  COURSES_DELETE
} from './actionTypes';

export const setCoursesData = coursesData => ({
  type: COURSES_ADD_TO_STORE,
  payload: coursesData,
});

export const createCourse = newCourseData => ({
  type: COURSES_CREATE,
  payload: newCourseData,
});

export const deleteCourse = courses => ({
  type: COURSES_DELETE,
  payload: courses,
});
