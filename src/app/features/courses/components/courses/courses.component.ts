import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from '../../../../core/models/course.model';
import { CourseService } from '../../../../core/services/course.service';
import { Observable } from 'rxjs';
import { CreateCourseComponent } from '../create-course/create-course.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy{

  courses!: any;

  constructor(private dialog: MatDialog, private _courseService: CourseService) {
    this._courseService.getCourses();
    this._courseService.listCourses$.subscribe((courses: Course) => {
      this.courses = courses;
    })
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }

  createCourse(){
    this.dialog.open(CreateCourseComponent, {
      width: '450px'
    })
  }
}
