import {Injectable} from '@angular/core';
import {User} from '../../app.model';
import { map, take } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

import {Http} from '@angular/http';
import { Headers } from '@angular/http';
import {Globals} from '../../global';


@Injectable()
export class LoginService {

  constructor(private http: Http, private cookieService: CookieService, private myGlobals: Globals) {}

  logIn(username: string, password: string) {
    const param = JSON.stringify({
      ['username']: username,
      ['password']: password
    });
    const head = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:51383/api/user/login', param, {headers: head, withCredentials: true})
      .pipe(
        map(
          (response: Response) => {
            const  data = response.json();
            return data;
          }
        )
      );
  }

}
