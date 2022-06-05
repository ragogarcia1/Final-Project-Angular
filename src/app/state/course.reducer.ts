import { createReducer, on } from '@ngrx/store';
import { CourseState } from '../core/models/course.state';
import { loadCourseRedux, loadCompletedCourseRedux } from './course.action';

export const estadoInicial: CourseState = {
  load: false,
  courses: [],
}
export const coursesReducer = createReducer(
  estadoInicial,
  on (loadCourseRedux, (state) => {
          return { ...state, load: true}
  }),
  on (loadCompletedCourseRedux, (state, {courses}) => {
      return {...state, load: false, courses}
  })
)
