import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from '../../../../core/models/course.model';
import { CourseService } from '../../../../core/services/course.service';
import { Observable } from 'rxjs';
import { CreateCourseComponent } from '../create-course/create-course.component';
import { MatDialog } from '@angular/material/dialog';
import { Action, Store } from '@ngrx/store';
import { loadCourseRedux, loadCompletedCourseRedux } from '../../../../state/course.action';

interface AppState {
  state: any;
}
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy{

  courses!: any;

  constructor(private dialog: MatDialog, private _courseService: CourseService, private store: Store<AppState>) {
    this._courseService.getCourses();
    this._courseService.listCourses$.subscribe((coursesList: any) => {
      this.courses = coursesList;
      this.store.dispatch(loadCompletedCourseRedux({courses : coursesList}))
    })
   }

  ngOnInit(): void {
    this.store.dispatch(loadCourseRedux());
  }

  ngOnDestroy(): void {

  }

  createCourse(){
    const accion: Action = {
      type: 'Creando'
    }
    this.store.dispatch(accion);
    this.dialog.open(CreateCourseComponent, {
      width: '450px'
    })
  }
}
