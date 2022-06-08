import { createAction, props } from "@ngrx/store"
import { Course } from '../core/models/course.model';


export const loadCourseRedux = createAction(
    '[Curso] Cargar Cursos',
)

export const loadCompletedCourseRedux = createAction(
    '[Curso] Cursos Cargados',
    props<{ courses: Course[] }>()
)

export const addCourse = createAction(
  '[Course List] Add course',
  props<{ course: any; }>()
);

export const retrievedCourseList = createAction(
  '[Course Success] Retrieve Course Success',
  props<{ courses: any; }>()
)
