import { Component, OnInit } from '@angular/core';
import {Marker} from '../home/rides/models/marker.model';
import {Globals} from '../global';
import {MapService} from '../map.service';
import {LocationModel} from '../models/location.model';

@Component({
  selector: 'app-driver-position',
  templateUrl: './driver-position.component.html',
  styleUrls: ['./driver-position.component.css']
})
export class DriverPositionComponent implements OnInit {

  startAddress: string;
  wantedAddress = '';
  marker: Marker;
  wantedMarker: Marker;

  constructor(public myGlobals: Globals, private mapService: MapService) {

    this.marker = new class implements Marker {
      label: string;
      lat: number;
      lng: number;
      locationChoosen: boolean;
    };

    this.marker.lat = myGlobals.myLocation.lat;
    this.marker.lng = myGlobals.myLocation.lng;
    this.marker.label = 'A';
    this.marker.locationChoosen = true;

    this.wantedMarker = new class implements Marker {
      label: string;
      lat: number;
      lng: number;
      locationChoosen: boolean;
    };

    this.wantedMarker.lat = myGlobals.myLocation.lat;
    this.wantedMarker.lng = myGlobals.myLocation.lng;
    this.wantedMarker.label = 'B';
    this.wantedMarker.locationChoosen = false;
  }

  ngOnInit() {
    this.mapService.getDriverLocation()
      .subscribe(
        (data: any) => {
          if (data.mylocation === 'success') {
            console.log('[TODO] Feedback on success location change');
            this.myGlobals.myLocation = new LocationModel(data.location.Lat, data.location.Lng, data.location.StreetNumber,
              data.location.StreetName, data.location.CityName, data.location.CityZipcode);
            console.log(JSON.stringify(this.myGlobals.myLocation));
            this.marker.lat = this.myGlobals.myLocation.lat;
            this.marker.lng = this.myGlobals.myLocation.lng;

            this.startAddress = this.myGlobals.myLocation.streetName;
            if (this.myGlobals.myLocation.streetNumber != undefined) this.startAddress += ' ' + this.myGlobals.myLocation.streetNumber;
            if (this.myGlobals.myLocation.cityName !== '') this.startAddress += ', ' + this.myGlobals.myLocation.cityName;
            if (this.myGlobals.myLocation.cityZipcode !== '') this.startAddress += ' ' + this.myGlobals.myLocation.cityZipcode;
          }
          else {
            console.log('[TODO] Feedback on failure location change: ' + data.message);
          }
        }
      );
    this.marker.lat = this.myGlobals.myLocation.lat;
    this.marker.lng = this.myGlobals.myLocation.lng;
    this.marker.label = 'A';
    this.marker.locationChoosen = true;
    console.log(JSON.stringify(this.marker));
  }

  parseAddress(addressToParse: string): any {
    var split = addressToParse.split(',');

    var tempValue = split[0].split(' ');

    var streetName = '';
    var streetNumber: number;

    var city = ''
    var zipcode = '';

    var country: string;

    let i = 0;
    for (; i < tempValue.length; ++i) {
      if ( tempValue[i].match(/^[0-9]+$/) == null) {
        streetName += tempValue[i] + ' ';
      } else
        streetNumber = parseInt(tempValue[i], 10);
    }

    for (tempValue = split[1].split(' '), i = 0; i < tempValue.length; ++i) {
      if ( tempValue[i].match(/^[0-9]+$/) == null) {
        city += tempValue[i] + ' ';
      } else
        zipcode = tempValue[i];
    }
    var returnString = {
      streetName, streetNumber, city, zipcode
    };
    return returnString;
  }

  OnChangeAddress() {
    var tempLocation = this.parseAddress(this.wantedAddress);
    this.mapService.setDriverLocation(tempLocation)
      .subscribe(
        (data: any) => {
          if (data.mylocation === 'success') {
            console.log('TODO, Feedback on success changing address');
            this.marker.lng = this.wantedMarker.lng;
            this.marker.lat = this.wantedMarker.lat;

            this.startAddress = this.wantedAddress;
            this.wantedMarker.locationChoosen = false;
            this.wantedAddress = '';
          }
          else {
            console.log('TODO, Feedback on failure changing address');
          }
        }
      )
  }

  onClickMap(event) {
    this.wantedMarker.lat = event.coords.lat;
    this.wantedMarker.lng = event.coords.lng;
    this.wantedMarker.locationChoosen = true;

    var latlng = new google.maps.LatLng(this.wantedMarker.lat, this.wantedMarker.lng);
    this.mapService.geocode(latlng)
      .subscribe(
        (data: any) => {
          console.log(data[0].formatted_address);
          this.wantedAddress = data[0].formatted_address;
        }
      );
  }
}
