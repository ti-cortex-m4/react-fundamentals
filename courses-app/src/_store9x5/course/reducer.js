import { GET_COURSE, CLEAR_CURRENT_COURSE } from './types';

export const initialCourseState = {
  id: '',
  title: '',
  description: '',
  duration: 0,
  creationDate: '',
  authors: [],
};

const courseReducer = (state = initialCourseState, action) => {
  switch (action.type) {
    case GET_COURSE:
      return action.payload;
    case CLEAR_CURRENT_COURSE:
      return {
        id: '',
        title: '',
        description: '',
        duration: 0,
        creationDate: '',
        authors: [],
      };
    default:
      return state;
  }
};

export default courseReducer;
