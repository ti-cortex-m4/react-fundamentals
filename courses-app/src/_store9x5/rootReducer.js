import { combineReducers } from 'redux';

import coursesReducer from './courses/reducer';
import authorsReducer from './authors/reducer';
import userReducer from './user/reducer';
import courseReducer from './course/reducer';

const rootReducer = combineReducers({
  courses: coursesReducer,
  course: courseReducer,
  authors: authorsReducer,
  user: userReducer,
});

export default rootReducer;
