import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { ServiceSecurity } from '../services/security.service';
import { Injectable } from '@angular/core';

@Injectable()

export class SecurityGuard implements CanActivate{

  constructor(private serviceSecurity: ServiceSecurity,
              private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any{
    if(this.serviceSecurity.onSesion()){
      return true
    }else{
      this.router.navigate(['/login']);
    }
  }
}
