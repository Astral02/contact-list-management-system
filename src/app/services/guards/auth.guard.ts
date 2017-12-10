import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LoginService } from '../Login/login.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private login: LoginService, private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const expectedRole = next.data.Role;
    if (this.login.isLoggedIn) {
      if ((this.login.isAdmin && expectedRole === 'Admin') ||
        (!this.login.isAdmin && expectedRole === 'User')) {
        return true;
      }
      this.router.navigate(['/pagenotfound']);
      return false;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
