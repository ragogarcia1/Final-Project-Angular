import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../../../core/models/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input() course!: Course;
  constructor() { }

  ngOnInit(): void {
  }

  removeCourse(){

  }

  editCourse(){

  }
}
