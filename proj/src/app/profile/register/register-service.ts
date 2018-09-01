import {Injectable} from '@angular/core';
import {User} from '../../app.model';

import {Http} from '@angular/http';
import { Headers } from '@angular/http';


@Injectable()
export class RegisterService {

  constructor(private http: Http) {}

  saveUser(user: User) {
    const head = new Headers({ 'Content-Type': 'application/json' });
    console.log('JSON:' + JSON.stringify(user));
    return this.http.post('http://localhost:51383/api/user/register', JSON.stringify(user), {headers: head });
  }

}
