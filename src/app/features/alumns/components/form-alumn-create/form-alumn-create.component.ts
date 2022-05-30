import { AfterViewInit, Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumn } from '../../../../core/models/alumn.model';

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
    @Inject(MAT_DIALOG_DATA) public dataCourses: any) {
    this.form = this.formBuilder.group({
      'fullName': [undefined, Validators.required],
      'identification': [undefined, Validators.required, Validators.maxLength(20)],
      'code': [undefined, Validators.required],
      'email': [undefined, Validators.required, Validators.email],
      'courses': [undefined],
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
  get courses() { return this.form.get('courses'); }

  saveAlumn() {
    const alumn: any = {
      "Code": this.code?.value,

    }
    console.log(alumn, this.form)
  }

  setIdentification(event: any){
    const ID = event.source.value;
    this.identification?.setValue(ID)
  }

  setCourse(event: any){
    const course = event.source.value;
    this.courses?.setValue(course)
  }

  async validationEmail() {
    let email = this.email?.value;
    //Una implementación del Estandard Official: RFC 5322
    if (!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/gm.test(email)) {
      this.strErrorEmail = this.strEmailInvalid;
      return false;
    }
    else if (/(@hotmail\.com|@gmail\.com)$/i.test(email)) {
      if (/[ñÑ]/.test(email)) {
        this.strErrorEmail = this.strEmailLetterInvalid;
        return false;
      }
    }

    this.strErrorEmail = null;
    return true;
  }
}
