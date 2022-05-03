import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { ServiceSecurity } from '../../../core/services/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _serviceSecutiry: ServiceSecurity) { }

  ngOnInit(): void {
  }

  loginUser(form: NgForm){
    console.log('Form', form.value)
    this._serviceSecutiry.login({
      email: form.value.email,
      password: form.value.password
    })
  }

}
