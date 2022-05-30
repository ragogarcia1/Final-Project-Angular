import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceSecurity } from '../../../core/services/security.service';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup

  constructor(private _securityService: ServiceSecurity,
              private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      'firstName': [undefined, Validators.required],
      'lastName': [undefined, Validators.required, Validators.maxLength(20)],
      'email': [undefined, Validators.required, Validators.email],
      'password': [undefined, Validators.required]
    })
   }

  get firstName() { return this.form.get('firstName'); }
  get lastName() { return this.form.get('lastName'); }
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

  ngOnInit(): void {
  }

  registerUser(){
    debugger
    const user: User = {
      "FirstName" : this.firstName?.value,
      "LastName": this.lastName?.value,
      "Email": this.email?.value,
      "Password": this.password?.value
    }

    this._securityService.registerUser(user);
  }

}
