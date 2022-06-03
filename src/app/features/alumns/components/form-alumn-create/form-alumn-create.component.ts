import { AfterViewInit, Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Alumn } from '../../../../core/models/alumn.model';
import { AlumnService } from '../../../../core/services/alumn.service';

@Component({
  selector: 'app-form-alumn-create',
  templateUrl: './form-alumn-create.component.html',
  styleUrls: ['./form-alumn-create.component.css']
})
export class FormAlumnCreateComponent implements OnInit, AfterViewInit {

  form!: FormGroup;
  strErrorEmail: any;
  strEmailInvalid: string = 'Por favor introduzca una dirección de correo electrónico válida. ejemplo@email.com';
  strEmailLetterInvalid: string = 'La letra ñ no es permitida en correos gmail.com y hotmail.com';
  currentCourses!: any;
  cursosSubscription: any;

  constructor(private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public dataCourses: any,
    public dialogRef: MatDialog,
    private alumnService: AlumnService) {
    this.form = this.formBuilder.group({
      'fullName': [undefined, Validators.required],
      'identification': [null, [Validators.required, Validators.maxLength(20)]],
      'code': [undefined, Validators.required],
      'email': [null, [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
    console.log(this.dataCourses)
  }

  ngAfterViewInit(): void {
  }

  get fullName() { return this.form.get('fullName'); }
  get identification() { return this.form.get('identification'); }
  get code() { return this.form.get('code'); }
  get email() { return this.form.get('email'); }

  async saveAlumn() {
    const alumn: Alumn = {
      "Code": this.code?.value,
      "FullName": this.fullName?.value,
      "Identification": this.identification?.value,
      "Email": this.email?.value,
      "State": true,
    }
    console.log(alumn, this.form)
    
    let response = await this.alumnService.createAlumn(alumn);
    console.log("Resp", response )
    this.dialogRef.closeAll();
  }
}
