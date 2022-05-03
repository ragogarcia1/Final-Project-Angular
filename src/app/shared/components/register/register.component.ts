import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceSecurity } from '../../../core/services/security.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _securityService: ServiceSecurity) { }

  ngOnInit(): void {
  }

  registerUser(form: NgForm){
    this._securityService.register({
      Email: form.value.email,
      Password: form.value.password,
      FullName: `${form.value.firstName} ${form.value.lastName}`,
      Identification: form.value.identification,
      State: true
    })
  }

}
