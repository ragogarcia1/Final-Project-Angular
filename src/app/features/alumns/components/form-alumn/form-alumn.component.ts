import { Component, Inject, OnInit } from '@angular/core';
import { Alumn } from 'src/app/core/models/alumn.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlumnService } from 'src/app/core/services/alumn.service';


@Component({
  selector: 'form-alumn',
  templateUrl: 'form-alumn.component.html'
})


export class FormAlumnComponent implements OnInit{

  form!: FormGroup;
  selectCourse!: any;
  isEdit: boolean = false;
  dataEdit: any;

  constructor( private formBuilder: FormBuilder,
               public dialogRef: MatDialog,
               private alumnService: AlumnService,
               @Inject(MAT_DIALOG_DATA) public data: any,
               ){
  this.form = this.formBuilder.group({
    'fullName': [undefined, Validators.required],
    'identification': [undefined, Validators.required],
    'code': [undefined, Validators.required],
    'email': [null, [Validators.required, Validators.email]]
  })
  }


  ngOnInit() {
    console.log("EditAlumn", this.data);
  }

  get fullName() { return this.form.get('fullName'); }
  get identification() { return this.form.get('identification'); }
  get code() { return this.form.get('code'); }
  get email() { return this.form.get('email'); }

  saveAlumn(){
    const alumn: Alumn = {
      "Code": this.code?.value,
      "FullName": this.fullName?.value,
      "Identification": this.identification?.value,
      "Email": this.email?.value,
      "State": true,
    }
    this.alumnService.editAlumn(alumn);
  }



};
