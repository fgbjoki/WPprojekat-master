import * as Google from '@agm/core/services/google-maps-types';
import {Observable, Observer} from 'rxjs';
import {  } from '@types/googlemaps';
import { LocationModel} from './models/location.model';
import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {CookieService} from 'ngx-cookie-service';
import {Globals} from './global';
import {map} from 'rxjs/operators';

declare const google: any;

@Injectable()
export class MapService {

  constructor(private http: Http, private myGlobals: Globals) {}


  findLocation(address) {
    var geocoder = new google.maps.Geocoder();
    return Observable.create((observer: Observer<string>) => {
      geocoder.geocode({ address: address }, (
        (results, status) => {
          console.log('findLocatioN:' + JSON.stringify(results));
          if (status === google.maps.GeocoderStatus.OK) {
            observer.next(results);
            observer.complete();
          } else {
            console.log('Geocoding service: geocoder failed due to: ' + status);
            observer.error(status);
          }
        })
      );
    });
  }

  getDriverLocation() {
    return this.http
      .get('http://localhost:51383/api/user/driverlocation')
      .pipe(
        map(
          (response: Response) => {
            const data = response.json();
            console.log('getDriverLocation: ' + JSON.stringify(data));
            return data;
          }
        )
      );
  }

  public setDriverLocation(location: LocationModel) {
    const head = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:51383/api/user/driverlocation',
      {
        newLocation: {
          Lat: location.lat,
          Lng: location.lng,
          StreetNumber: location.streetNumber,
          StreetName: location.streetName,
          CityName: location.cityName,
          CityZipcode: location.cityZipcode
        }
      }, {headers: head})
      .pipe(
        map(
          (response: Response) => {
            const data = response.json();
            return data;
          }
        )
      );
  }

  geocode(latLng: google.maps.LatLng): Observable<google.maps.GeocoderResult[]> {
    var geocoder = new google.maps.Geocoder();
    return Observable.create((observer: Observer<google.maps.GeocoderResult[]>) => {
      geocoder.geocode({ location: latLng }, (
        (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
          if (status === google.maps.GeocoderStatus.OK) {
            observer.next(results);
            observer.complete();
          } else {
            console.log('Geocoding service: geocoder failed due to: ' + status);
            observer.error(status);
          }
        })
      );
    });
  }
}
