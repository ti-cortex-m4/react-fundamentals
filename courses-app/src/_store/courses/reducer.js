import { SAVE_ALL_COURSES, ADD_COURSE, DELETE_COURSES } from './types';

export const initialCoursesState = [];

const coursesReducer = (state = initialCoursesState, action) => {
  switch (action.type) {
    case SAVE_ALL_COURSES: {
      return action.payload;
    }
    case ADD_COURSE: {
      return [...state, action.payload];
    }
    case DELETE_COURSES: {
      return state.filter((course) => course.id !== action.payload);
    }
    default:
      return state;
  }
};

export default coursesReducer;
