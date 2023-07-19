import { ICourseData } from 'src/models/ICourseItem';
import APIService from 'src/services/api.service';

import { selectToken } from '../selectors';
import {
	addCourseAction,
	deleteCourseAction,
	setCoursesAction,
	updateCourseAction,
} from './actions';

export function fetchCourses() {
	return async (dispatch) => {
		const courses = await APIService.getCourses();
		dispatch(setCoursesAction(courses));
	};
}

export function createCourse(courseData: ICourseData) {
	return async (dispatch, getState) => {
		const token = selectToken(getState());
		const course = await APIService.createCourse(courseData, token);

		dispatch(addCourseAction(course));
	};
}

export function updateCourse(courseId: string, courseData: ICourseData) {
	return async (dispatch, getState) => {
		const token = selectToken(getState());
		const course = await APIService.updateCourse(courseId, courseData, token);

		dispatch(updateCourseAction(course));
	};
}

export function deleteCourse(courseId: string) {
	return async (dispatch, getState) => {
		const token = selectToken(getState());
		await APIService.deleteCourse(courseId, token);

		dispatch(deleteCourseAction(courseId));
	};
}
