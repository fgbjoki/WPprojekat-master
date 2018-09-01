import { Component, OnInit } from '@angular/core';
import {Globals} from '../global';
import {LogoutService} from './logout/logout.component';
import {Route, Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public myGlobals: Globals, private logoutService: LogoutService, private route: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.logoutService.logOut()
      .subscribe(
        (response: any) => {
          if (response.logout === 'success') {
            this.route.navigateByUrl('/');
            this.myGlobals.myUser.logOut();
          }
        }
      );
  }

}
