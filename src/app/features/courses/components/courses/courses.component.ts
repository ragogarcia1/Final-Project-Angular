import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from '../../../../core/models/course.model';
import { CourseService } from '../../../../core/services/course.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy{

  courses$!: Observable<any>;
  courses!: any;

  constructor(private _courseService: CourseService) {
    this._courseService.getCourses();
    this._courseService.listCourses$.subscribe((courses: Course) => {
      this.courses = courses;
    })
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }
}
