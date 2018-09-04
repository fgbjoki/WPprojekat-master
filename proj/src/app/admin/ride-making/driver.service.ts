import {RideModel} from '../../models/ride.model';

import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {map} from 'rxjs/operators';

import {Router} from '@angular/router';


@Injectable()
export class DriverService {

  constructor(private http: Http, private router: Router) {}
  public getDrivers() {
    return this.http
      .get('http://localhost:51383/api/user/drivers')
      .pipe(
        map(
          (response: Response) => {
            const data = response.json();
            return data;
          }
        )
      );
  }

}
