import { Component, OnInit } from '@angular/core';
import { Course } from '../../../../core/models/course.model';
import { CourseService } from '../../../../core/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses!: any;

  constructor(private _courseService: CourseService) { }

  ngOnInit(): void {
    this._courseService.getCourses().subscribe((courses: Course) => {
      this.courses = courses;
    })
  }



}
