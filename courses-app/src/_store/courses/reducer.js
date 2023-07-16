import * as types from './actionTypes';

const coursesInitialState = {
  courses: [],
};

const coursesReducer = (state = coursesInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.COURSES_ADD_TO_STORE:
      return {
        courses: payload,
      };
    case types.COURSES_CREATE:
      return {
        courses: [...state.courses, payload],
      };
    case types.COURSES_UPDATE:
      return {
        courses: [...state.courses, payload],
      }
    case types.COURSES_DELETE:
      return {
        courses: payload,
      }
    default:
      return state;
  }
};

export default coursesReducer;
