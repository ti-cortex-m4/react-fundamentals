import {
  SAVE_COURSES,
  ADD_COURSE,
  UPDATE_COURSE,
  DELETE_COURSE,
} from './types';

export const initialCoursesState = [];

const coursesReducer = (state = initialCoursesState, action) => {
  switch (action.type) {
    case SAVE_COURSES: {
      return action.payload;
    }
    case ADD_COURSE: {
      return [...state, action.payload];
    }
    case UPDATE_COURSE: {
      return state.map((course) => course.id === action.payload.id ? action.payload : course);
    }
    case DELETE_COURSE: {
      return state.filter((course) => course.id !== action.payload);
    }
    default:
      return state;
  }
};

export default coursesReducer;
