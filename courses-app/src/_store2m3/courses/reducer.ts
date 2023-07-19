import ICourseItem from 'src/models/ICourseItem';

import CourseActionTypes from './types';

import { CoursesActions } from './actions';

export const coursesInitialState: ICourseItem[] = [];

export default function coursesReducer(
	state = coursesInitialState,
	action: CoursesActions
) {
	switch (action.type) {
		case CourseActionTypes.ADD_COURSE:
			return [...state, action.payload];
		case CourseActionTypes.DELETE_COURSE:
			return state.filter((course) => course.id !== action.payload);
		case CourseActionTypes.UPDATE_COURSE:
			return state.map((course) => {
				const updatedCourse = action.payload;
				if (course.id === updatedCourse.id) {
					return updatedCourse;
				} else {
					return course;
				}
			});
		case CourseActionTypes.SET_COURSES:
			return action.payload;
		default:
			return state;
	}
}
