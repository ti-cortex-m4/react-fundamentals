import { createSelector } from '@reduxjs/toolkit';
import IAuthorItem from 'src/models/IAuthorItem';
import ICourseItem from 'src/models/ICourseItem';
import { IUserInfo } from 'src/models/IUserInfo';

import { RootState } from './store';

export const selectAuthors = (state: RootState): IAuthorItem[] => state.authors;

export const selectCourses = (state: RootState): ICourseItem[] => state.courses;

export const selectCourse = (state: RootState, courseId: string): ICourseItem =>
	state.courses.find((course) => course.id === courseId);

export const selectUser = (state: RootState): IUserInfo & { isAuth: boolean } =>
	state.user;

export const selectCoursesWithAuthors = createSelector(
	[selectCourses, selectAuthors],
	(courses: ICourseItem[], authors: IAuthorItem[]) =>
		courses.map((course) => ({
			...course,
			...{
				authors: course.authors.map((authorId) =>
					authors.find((author) => author.id === authorId)
				),
			},
		}))
);

export const selectCourseWithAuthors = createSelector(
	[selectCourse, selectAuthors],
	(course: ICourseItem, authors: IAuthorItem[]) =>
		setCourseAuthorsFromAuthorIds(course, authors)
);

function setCourseAuthorsFromAuthorIds(
	course: ICourseItem,
	allAuthors: IAuthorItem[]
): ICourseItem {
	return {
		...course,
		...{
			authors: course.authors.map((authorId) =>
				allAuthors.find((author) => author.id === authorId)
			),
		},
	};
}
