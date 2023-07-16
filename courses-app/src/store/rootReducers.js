import { combineReducers } from 'redux';

import { userReducer } from './user/reducer';
import { authorsReducer } from './authors/reducer';
import { coursesReducer } from './courses/reducer';

export const rootReducer = combineReducers({
	user: userReducer,
	courses: coursesReducer,
	authors: authorsReducer,
});
