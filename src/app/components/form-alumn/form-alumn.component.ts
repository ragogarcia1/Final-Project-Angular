import { Component, Inject, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatOption } from "@angular/material/core";
import { MatSelectChange } from "@angular/material/select";
import { AlumnService } from '../../services/alumn.service';
import { Alumn } from '../../models/alumn.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'form-alumn',
  templateUrl: 'form-alumn.component.html'
})


export class FormAlumnComponent{

  selectCourse!: any;

  constructor( private alumnService: AlumnService){  }

  saveAlumn(form: NgForm){
    console.log(form);
    this.alumnService.addAlumn({
      Code: form.value.code,
      FullName: form.value.firstName +' '+ form.value.lastName,
      Identification: form.value.identification,
      Course: form.value.course,
      State: true
    });
  }

};
