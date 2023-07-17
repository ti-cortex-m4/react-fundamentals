import {
  SAVE_ALL_COURSES,
  ADD_COURSE,
  UPDATE_COURSE,
  DELETE_COURSES,
} from './types';

export const saveCoursesAction = (payload) => ({type: SAVE_COURSES, payload });
export const addCourseAction = (payload) => ({ type: ADD_COURSE, payload });
export const updateCourseAction = (payload) => ({type: UPDATE_COURSE, payload });
export const deleteCourseAction = (payload) => ({type: DELETE_COURSES, payload });
