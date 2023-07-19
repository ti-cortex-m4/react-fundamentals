import {
  SAVE_COURSES,
  DELETE_COURSES,
  ADD_COURSE,
  UPDATE_COURSE,
} from './types';

export const saveCoursesAction = (payload) => ({
  type: SAVE_COURSES,
  payload,
});
export const addCourseAction = (payload) => ({ type: ADD_COURSE, payload });
export const deleteCourseAction = (payload) => ({
  type: DELETE_COURSES,
  payload,
});
export const updateCorseAction = (payload) => ({
  type: UPDATE_COURSE,
  payload,
});
