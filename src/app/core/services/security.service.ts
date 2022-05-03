import { Alumn } from '../models/alumn.model';
import { LoginData } from '../models/login_data.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceSecurity {

  changeSecurity = new Subject<boolean>();

  private user!: any;

  constructor(private _router: Router){

  }

  register(user: Alumn) {
    this.user = {
      AlumnId: Math.round(Math.random() * 10000),
      Email: user.Email,
      FullName: user.FullName,
      Identification: user.Identification,
      Password: user.Password,
      State: true
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
    return this.user != null;
  }
}
