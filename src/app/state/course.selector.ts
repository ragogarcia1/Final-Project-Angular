import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseState } from '../core/models/course.state';

export const selectCourse = createFeatureSelector<any>('courses');
export const selectorLoadCourses = createSelector( selectCourse, (state: CourseState) => state.load );
export const selectorLoadCompletedCourses = createSelector( selectCourse, (state: CourseState) => state.courses);

