import {Injectable} from '@angular/core';

import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';


@Injectable()
export class LogoutService {

  constructor(private http: Http, private router: Router) {}

  logOut() {
    return this.http.post('http://localhost:51383/api/user/logout', '')
      .pipe(
        map(
          (response: Response) => {
            const data = response.json();
            console.log(data);
            return data;
          }
        )
      );
  }

}
