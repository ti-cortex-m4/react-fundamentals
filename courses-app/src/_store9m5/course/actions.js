import { GET_COURSE, CLEAR_CURRENT_COURSE } from './types';

export const getCourseAction = (payload) => ({ type: GET_COURSE, payload });
export const clearCurrentCourse = () => ({
  type: CLEAR_CURRENT_COURSE,
});
