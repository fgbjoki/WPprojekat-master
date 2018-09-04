
import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {map} from 'rxjs/operators';
import {LocationModel} from '../../models/location.model';
import {CarType} from '../../models/car.types';
import {GoogleMap} from '@agm/core/services/google-maps-types';

import {Observable, Observer} from 'rxjs';
import {Router} from '@angular/router';
import LatLng = google.maps.LatLng;
import {CommentModel} from '../../models/comment.model';


@Injectable()
export class AdminRideService {

  constructor(private http: Http, private router: Router) {}

  adminCreateRide(location: LocationModel, carType: CarType, driverID: number) {
    const head = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:51383/api/ride/admincreated',
      {
        Location: location,
        CarType: carType,
        DriverID: driverID}, {headers: head })
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
