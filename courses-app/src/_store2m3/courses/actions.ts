import ICourseItem from 'src/models/ICourseItem';

import CourseActionTypes from './types';

type AddNewCourseAction = {
	type: CourseActionTypes.ADD_COURSE;
	payload: ICourseItem;
};

type DeleteCourseAction = {
	type: CourseActionTypes.DELETE_COURSE;
	payload: string;
};

type SetCoursesAction = {
	type: CourseActionTypes.SET_COURSES;
	payload: ICourseItem[];
};

type UpdateCourseAction = {
	type: CourseActionTypes.UPDATE_COURSE;
	payload: ICourseItem;
};

export type CoursesActions =
	| AddNewCourseAction
	| DeleteCourseAction
	| SetCoursesAction
	| UpdateCourseAction;

export const addCourseAction = (course: ICourseItem): AddNewCourseAction => ({
	type: CourseActionTypes.ADD_COURSE,
	payload: course,
});

export const deleteCourseAction = (deleteId: string): DeleteCourseAction => ({
	type: CourseActionTypes.DELETE_COURSE,
	payload: deleteId,
});

export const setCoursesAction = (courses: ICourseItem[]): SetCoursesAction => ({
	type: CourseActionTypes.SET_COURSES,
	payload: courses,
});

export const updateCourseAction = (
	updatedCourse: ICourseItem
): UpdateCourseAction => ({
	type: CourseActionTypes.UPDATE_COURSE,
	payload: updatedCourse,
});
