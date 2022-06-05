import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { CourseState } from '../core/models/course.state';

export const selectorCourse = (state: AppState) => state.courses;
export const selectorLoadCourses = createSelector( selectorCourse, (state: CourseState) => state.load );
export const selectorLoadCompletedCourses = createSelector( selectorCourse, (state: CourseState) => state.courses);

