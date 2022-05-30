import { Alumn } from '../models/alumn.model';
import { LoginData } from '../models/login_data.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class ServiceSecurity {

  changeSecurity = new Subject<boolean>();

  private user!: any;

  constructor(private _router: Router){

  }

  registerUser(user: User) {
    this.user = {
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName,
      Password: user.Password
    };
    this.changeSecurity.next(true);
    this._router.navigate(['/']);
  }

  login(loginData: LoginData) {
    this.user = {
      Email: loginData.email,
      Password: loginData.password
    };
    this.changeSecurity.next(true);
    this._router.navigate(['/']);
  }

  logout() {
    this.user = null!;
    this.changeSecurity.next(false);
    this._router.navigate(['/login'])
  }

  getUser() {
    return { ...this.user };
  }

  onSesion(){
    debugger
    return this.user != null;
  }
}
