import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ServiceSecurity } from '../../../core/services/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // form: FormGroup = new FormGroup({});
  // isCheck!: any;

  constructor(private _serviceSecutiry: ServiceSecurity, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.form = this.formBuilder.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required]]
    // })
  }

  loginUser(form: NgForm){
    console.log('Form', form.value)
    if(form.valid){
      this._serviceSecutiry.login({
        email: form.value.email,
        password: form.value.password
      })
      return true;
    }else{
      return false;
    }
  }

}
