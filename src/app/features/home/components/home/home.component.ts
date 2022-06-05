import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseService } from '../../../../core/services/course.service';
import { Course } from '../../../../core/models/course.model';
import { AlumnService } from '../../../../core/services/alumn.service';
import { StudentInscriptionComponent } from '../student-inscription/student-inscription.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses: any;
  alumns: any;

  constructor(private dialog: MatDialog, private _courseService: CourseService, private _alumnService: AlumnService) {
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
