import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Globals} from './global';
import {Injectable} from '@angular/core';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private myGlobals: Globals, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.myGlobals.myUser.username === '') {
      this.router.navigateByUrl('/profile/login');
    }
    else  if(this.myGlobals.myUser.accessLevel !== 3) {
      this.router.navigateByUrl('');
    }
    else {
      return true;
    }
  }
}