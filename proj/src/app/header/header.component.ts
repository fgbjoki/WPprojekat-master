import { Component, EventEmitter, Output } from '@angular/core';
import { Globals } from '../global';
import {LogoutService} from '../profile/logout/logout.component';
import {AccessLevel} from '../app.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {

  constructor(public myGlobal: Globals, private logoutService: LogoutService, private route: Router) {}

  logOut() {
    this.logoutService.logOut()
      .subscribe(
        (response: any) => {
          if (response.logout === 'success') {
            this.route.navigateByUrl('/');
            this.myGlobal.myUser.logOut();
            this.route.navigateByUrl('/profile/login');
          }
        }
      );
  }
}
