import {RideModel} from '../../models/ride.model';

import {EventEmitter, Injectable} from '@angular/core';
import {Headers, HttpModule, Http} from '@angular/http';
import {map} from 'rxjs/operators';
import {LocationModel} from '../../models/location.model';
import {CarType} from '../../models/car.types';
import {GoogleMap} from '@agm/core/services/google-maps-types';

import {Observable, Observer} from 'rxjs';
import {Router} from '@angular/router';
import LatLng = google.maps.LatLng;
import {CommentModel} from '../../models/comment.model';


@Injectable()
export class RideService {
  public rideSelected = new EventEmitter<RideModel>();

  constructor(private http: Http, private router: Router) {}

  private rides: RideModel[] = [];

  public getRides() {
    return this.http
      .get('http://localhost:51383/api/ride')
      .pipe(
        map(
          (response: Response) => {
            const data = response.json();
            this.populateRides(data);
            return data;
          }
        )
      );
  }

  public getAllRides() {
    return this.http
      .get('http://localhost:51383/api/allRides')
      .pipe(
        map(
          (response: Response) => {
            const data = response.json();
            this.populateRides(data);
            return data;
          }
        )
      );
  }

  public cancelRide(rideID: number) {
    const head = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:51383/api/ride/cancelride',
      JSON.stringify(rideID), {headers: head})
      .pipe(
        map(
          (response: Response) => {
            const data = response.json();
            return data;
          }
        )
      );
  }

  public acceptRide(rideID: number) {
    const head = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:51383/api/ride/acceptride',
      JSON.stringify(rideID), {headers: head})
      .pipe(
        map(
          (response: Response) => {
            const data = response.json();
            return data;
          }
        )
      );
  }

  public failedRide(rideID: number) {
    const head = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:51383/api/ride/failedride',
      JSON.stringify(rideID), {headers: head})
      .pipe(
        map(
          (response: Response) => {
            const data = response.json();
            return data;
          }
        )
      );
  }

  public succeededRide(rideID: number) {
    const head = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:51383/api/ride/successride',
      JSON.stringify(rideID), {headers: head})
      .pipe(
        map(
          (response: Response) => {
            const data = response.json();
            return data;
          }
        )
      );
  }

  public changeAddress(rideID: number, newLocation: LocationModel) {
    const head = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:51383/api/ride/changeRideAddress',
      {
        RideID: rideID,
        NewLocation: newLocation
      }
      , {headers: head })
      .pipe(
        map(
          (response: Response) => {
            const data = response.json();
            return data;
          }
        )
      );
  }

  populateRides(data: any) {
    for (let i = 0; i < data.rides.length; ++i) {
      this.rides = [];
      this.rides.push(new RideModel(data.rides[i].CarType, data.rides[i].RideID, data.rides[i].TimeMade, data.rides[i].DriverID,
        data.rides[i].AdminName, data.rides[i].Price,
        new CommentModel(data.rides[i].Comment.Description, data.rides[i].Comment.CreateDate,
          data.rides[i].Comment.ClientID, data.rides[i].Comment.RideID, data.rides[i].Comment.DriveID,
          data.rides[i].Comment.Grade),
        data.rides[i].Status,
        new LocationModel(data.rides[i].StartLocation.Lat, data.rides[i].StartLocation.Lng,
          data.rides[i].StartLocation.StreetNumber, data.rides[i].StartLocation.StreetName,
          data.rides[i].StartLocation.CityName, data.rides[i].StartLocation.CityZipCode), data.rides[i].UserID));
    }
  }

  getRide(index: number) {
    console.log('getRide index: ' + index);
    for (let i = 0; i < this.rides.length; ++i) {
      console.log('getRide requested: ' + this.rides[i].startLocation.streetName);
    }

    return this.rides[index];
  }

  createRide(location: LocationModel, carType: CarType) {
    const head = new Headers({ 'Content-Type': 'application/json' });
    console.log('[debug] sending JSON for adding a ride:' + JSON.stringify({Location: location, CarType: carType}));
    return this.http.post('http://localhost:51383/api/ride/usercreated',
      JSON.stringify({Location: location, CarType: carType}), {headers: head });
  }
}
