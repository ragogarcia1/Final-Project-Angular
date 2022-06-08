import { createReducer, on } from '@ngrx/store';
import { Course } from '../core/models/course.model';
import { retrievedCourseList, addCourse, loadCourseRedux, loadCompletedCourseRedux } from './course.actions';
import { CourseState } from '../core/models/course.state';

export const initialState: any = [];

export const courseReducer = createReducer(

  initialState,
  on(addCourse, (oldState, { course }) => {
    return [ ...oldState, ...[course]]
  }),
  on(retrievedCourseList, (oldState, { courses }) => {
    return [...oldState, ...courses]
  })

)

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
