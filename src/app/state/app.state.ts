import { ActionReducerMap } from '@ngrx/store';
import { CourseState } from '../core/models/course.state';
import { coursesReducer } from './course.reducer';

export interface AppState {
  courses: CourseState
}

export const ROOT_REDUCERS : ActionReducerMap<AppState> = {
  courses: coursesReducer
}
