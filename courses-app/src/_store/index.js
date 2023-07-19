import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { initialAuthorsState } from './authors/reducer';
import { initialCoursesState } from './courses/reducer';
import { initialUserState } from './user/reducer';

import {rootReducer} from './rootReducer';

const appInitialState = {
  courses: initialCoursesState,
  authors: initialAuthorsState,
  user: initialUserState,
};

const store = createStore(
  rootReducer,
  appInitialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
