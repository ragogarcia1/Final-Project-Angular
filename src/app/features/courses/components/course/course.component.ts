import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../../../core/models/course.model';
import { CourseService } from '../../../../core/services/course.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateCourseComponent } from '../create-course/create-course.component';
import { EditCourseComponent } from '../edit-course/edit-course.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input() course!: Course;
  constructor(private courseService: CourseService, private dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  removeCourse(courseId: any){
    this.courseService.deleteCourse(courseId);
  }

  editCourse(course: Course){
    this.dialog.open(EditCourseComponent ,{
      width: '550px',
      data: course
    })
  }
}
