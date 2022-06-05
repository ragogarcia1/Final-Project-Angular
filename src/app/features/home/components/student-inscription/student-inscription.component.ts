import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlumnService } from '../../../../core/services/alumn.service';
import { CourseService } from '../../../../core/services/course.service';

@Component({
  selector: 'app-student-inscription',
  templateUrl: './student-inscription.component.html',
  styleUrls: ['./student-inscription.component.css']
})
export class StudentInscriptionComponent implements OnInit {

  studentList: any;
  dataCourseSelected: any;
  studentsEnrolled: any;
  studentsUnenrolled: any = [];
  studentSelected: any;
  form!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public dataReceived: any, private formBuilder: FormBuilder, public dialogRef: MatDialog,
  private alumnService: AlumnService, private courseService: CourseService) {
    this.dataCourseSelected = this.dataReceived.courseSelected;
    this.form = this.formBuilder.group({
      'studentSelect': [undefined, Validators.required]
    })
    this.studentList = this.dataReceived.students;
    this.validateAlumnsInCourses()
  }

  ngOnInit(): void {
  }

  get studentSelect() { return this.form.get('studentSelect'); }

  validateAlumnsInCourses(){
    this.studentsEnrolled = this.dataCourseSelected.Alumns;
    this.studentList.forEach((student:any) => {
      let response = this.checkAvailability(this.dataReceived.courseSelected.Alumns, student.AlumnId)
      if(!response) {
        this.studentsUnenrolled.push(student);
      }
    });
  }

  checkAvailability(studentList:any, studentId: any){
    let response = studentList.some((item:any) => item.AlumnId == studentId);
    return response;
  }

  setAlumn(event: any){
    this.studentSelected = event.source.value;
  }

  saveInscription(){
    this.dataCourseSelected.Alumns.push(this.studentSelected);
    const courseUpdated =  this.dataCourseSelected;
    this.courseService.editCourse(courseUpdated, this.dataCourseSelected.CourseId);
    this.studentSelected.Courses.push(this.dataCourseSelected);
    this.alumnService.editAlumn(this.studentSelected, this.studentSelected.AlumnId);
    this.dialogRef.closeAll();
  }
}
