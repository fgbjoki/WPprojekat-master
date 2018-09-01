
import {EventEmitter, Injectable} from '@angular/core';
import {Headers, HttpModule, Http} from '@angular/http';

import {Router} from '@angular/router';
import {User} from '../../app.model';
import {VehicleModel} from '../../models/vehicle.model';
import {map} from 'rxjs/operators';


@Injectable()
export class DriverMakingService {
  constructor(private http: Http, private router: Router) {
  }

  createDriver(driver: User, vehicle: VehicleModel) {
    const objectToSend = {user: driver, vehicle: vehicle};
    const head = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:51383/api/user/registerdriver',
      JSON.stringify(objectToSend), {headers: head})
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

