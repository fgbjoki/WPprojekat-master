import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AccessLevel, User} from '../../app.model';
import {Globals} from '../../global';
import {LoginService} from './login-service';
import {NgModel} from '@angular/forms';
import {Router} from '@angular/router';
import {interval, Observable, observable} from 'rxjs';
import {takeWhile} from 'rxjs/operators';
import MapsEngineLayer = google.maps.visualization.MapsEngineLayer;
import {MapService} from '../../map.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('username') usernameInput: NgModel;
  @ViewChild('password') passwordInput: NgModel;

  constructor(private myUserService: LoginService, private myUser: Globals, private router: Router, private mapService: MapService) { }


  onSubmit(): void {
    this.myUserService.logIn(this.usernameInput.value, this.passwordInput.value)
      .subscribe(
        (response: any) => {
          if (response.login === 'success') {

            this.myUser.myUser.logIn(response.user.Username,
              response.user.Password, response.user.Firstname,
              response.user.Lastname, response.user.JMBG, response.user.MobilePhoneNumber,
              response.user.Email, response.user.AccessLevel);

            if (response.user.AccessLevel === 2) {
              this.mapService.getDriverLocation()
                .subscribe(
                  (data: any) => {
                    if (data.mylocation === 'success') {
                      console.log('[TODO] Feedback on success location change');
                      this.myUser.myLocation = data.location;
                    }
                    else {
                      console.log('[TODO] Feedback on failure location change: ' + data.message);
                    }
                  }
                );
            }
            this.router.navigateByUrl('/');
          }
        }
      );
  }
  ngOnInit() {

  }

}
