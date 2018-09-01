import {Injectable} from '@angular/core';
import {User} from '../../app.model';

import {Http} from '@angular/http';
import { Headers } from '@angular/http';
import {map} from 'rxjs/operators';


@Injectable()
export class ModifyService {

  constructor(private http: Http) {}

  modifyUser(user: User) {
    const head = new Headers({ 'Content-Type': 'application/json' });
    console.log('JSON:' + JSON.stringify(user));
    return this.http.post('http://localhost:51383/api/user/modify', JSON.stringify(user), {headers: head , withCredentials: true})
      .pipe(
        map(
          (response: Response) => {
            const data = response.json();
            console.log('response modifyUser: ' + data);
            return data;
          }
        )
      );
  }

}
