import { configureStore } from '@reduxjs/toolkit';

import authorsReducer, { authorsInitialState } from './authors/reducer';
import coursesReducer, { coursesInitialState } from './courses/reducer';
import userReducer, { userInitialState } from './user/reducer';

const preloadedState = {
	courses: coursesInitialState,
	authors: authorsInitialState,
	user: userInitialState,
};

const reducer = {
	courses: coursesReducer,
	authors: authorsReducer,
	user: userReducer,
};

export const store = configureStore({
	reducer,
	preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
