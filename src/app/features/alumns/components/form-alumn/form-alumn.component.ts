import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Alumn } from 'src/app/core/models/alumn.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AlumnService } from 'src/app/core/services/alumn.service';


@Component({
  selector: 'form-alumn',
  templateUrl: 'form-alumn.component.html'
})


export class FormAlumnComponent implements OnInit{

  selectCourse!: any;
  isEdit: boolean = false;
  dataEdit: any;

  constructor(
               public dialogRef: MatDialog,
               private alumnService: AlumnService,
               @Inject(MAT_DIALOG_DATA) public data: any,
               ){
              }


  ngOnInit() {
  }

  saveAlumn(form: NgForm){
    console.log(form)
    if(form.valid){
      this.alumnService.createAlumn({
        "FullName": "Pepo",
        "Identification": "102892321",
        "Code": "code102",
        "State": true,
        "AlumnId": 9821
        // "FullName": form.value.firstName +' '+ form.value.lastName,
        // "Identification": form.value.identification,
        // "Code": form.value.code,
        // "Course": form.value.course,
        // "AdmissionDate": 12324,
        // "State": true,
        // "AlumnId": 1020
      });
      this.dialogRef.closeAll();
    }
  }



};
