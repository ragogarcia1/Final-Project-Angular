import { ActionReducerMap } from '@ngrx/store';
import { Course } from '../core/models/course.model';
import { courseReducer } from './course.reducer';

export interface AppState {
  courses: any
}

export const ROOT_REDUCERS : ActionReducerMap<AppState> = {
  courses: courseReducer
}
