import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseService } from '../../../../core/services/course.service';
import { Course } from '../../../../core/models/course.model';
import { AlumnService } from '../../../../core/services/alumn.service';
import { StudentInscriptionComponent } from '../student-inscription/student-inscription.component';
import { Store } from '@ngrx/store';
import { retrievedCourseList } from 'src/app/state/course.actions';
import { Observable } from 'rxjs';
import { selectCourse } from 'src/app/state/course.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses: any;
  alumns: any;
  alumnsEnrolled: any;
  listCourses$: Observable<any> = new Observable();

  constructor(private dialog: MatDialog,
              private _courseService: CourseService,
              private _alumnService: AlumnService,
              private store: Store) {
                this._courseService.getCourses();
                this._courseService.listCourses$.subscribe((courses: Course) => {
                  this.courses = courses;
                })
                this._alumnService.getAlumns()
                this._alumnService.listAlumns$.subscribe((alumns: any) => {
                  this.alumns = alumns;
                })
  }

  ngOnInit(): void {
    this.store.select(this.courses)
  }

  addStudentCourse(course: Course){
    const courseSelected = course;
    const data = {
      "courseSelected": courseSelected,
      "students": this.alumns
    }
    this.dialog.open( StudentInscriptionComponent, {
      width: '500px',
      data: data
    })
  }

}
