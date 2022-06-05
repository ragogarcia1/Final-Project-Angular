import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from '../../../../core/models/course.model';
import { CourseService } from '../../../../core/services/course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  form!: FormGroup;
  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private courseService: CourseService) {
    this.form = this.formBuilder.group({
      'name': [undefined, Validators.required],
      'description': [undefined, Validators.required],
      'teacher': [undefined, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  get name() { return this.form.get('name'); }
  get description() { return this.form.get('description'); }
  get teacher() { return this.form.get('teacher'); }

  async saveChanges() {
    const courseEdit: Course = {
      "Name": this.name?.value,
      "Description": this.description?.value,
      "Teacher": this.teacher?.value
    };

    await this.courseService.editCourse(courseEdit, this.data.CourseId)
    this.dialogRef.closeAll();
  }
}
