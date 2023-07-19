import { configureStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { initialUserState } from './user/reducer';
import { initialAuthorsState } from './authors/reducer';
import { initialCoursesState } from './courses/reducer';
import { rootReducer } from './rootReducer';

const appInitialState = {
  user: initialUserState,
  authors: initialAuthorsState,
  courses: initialCoursesState,
};

const store = configureStore(
  rootReducer,
  appInitialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
