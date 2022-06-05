import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Course } from '../../../../core/models/course.model';
import { CourseService } from '../../../../core/services/course.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialog,
              private courseService: CourseService) {
      this.form = this.formBuilder.group({
        'name': [undefined, Validators.required],
        'description': [undefined, Validators.required],
        'teacher': [undefined, Validators.required]
      })
    }

  ngOnInit(): void {
  }

  get name() { return this.form.get('name'); }
  get description() { return this.form.get('description'); }
  get teacher() { return this.form.get('teacher'); }

  async saveCourse() {
    const course: Course = {
      "Name": this.name?.value,
      "Description": this.description?.value,
      "Teacher": this.teacher?.value
    }
    await this.courseService.createCourse(course);
    this.dialogRef.closeAll();
  }
}
