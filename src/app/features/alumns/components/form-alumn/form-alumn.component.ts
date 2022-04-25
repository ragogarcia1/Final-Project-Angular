import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Alumn } from 'src/app/core/models/alumn.model';
import { MatDialog } from '@angular/material/dialog';
import { AlumnService } from 'src/app/core/services/alumn.service';


@Component({
  selector: 'form-alumn',
  templateUrl: 'form-alumn.component.html'
})


export class FormAlumnComponent{

  selectCourse!: any;

  constructor( private alumnService: AlumnService, private dialogRef: MatDialog){  }

  saveAlumn(form: NgForm){
    console.log(form)
    if(form.valid){
      this.alumnService.createAlumn({
        "FullName": "Pepo",
        "Identification": "102892321",
        "Code": "code102",
        "Course": "Docker",
        "State": true,
        "AdmissionDate": "'20/05/2020'",
        "AlumnId": "9821"
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
