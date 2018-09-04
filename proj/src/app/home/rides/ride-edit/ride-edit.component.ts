import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {RideService} from '../ride.service';
import {RideStatus} from '../../../models/ride.status';
import {Marker} from '../models/marker.model';
import {MapService} from '../../../map.service';
import {LocationModel} from '../../../models/location.model';
import {Globals} from '../../../global';
import {RideModel} from '../../../models/ride.model';
import {CarType} from '../../../models/car.types';
import { } from '@types/googlemaps';
import * as Google from '@agm/core/services/google-maps-types';
import {Observable, Observer} from 'rxjs';
import {  } from '@types/googlemaps';
import {Injectable} from '@angular/core';
import {DriverModel} from '../../../admin/ride-making/driver.model';

declare const google: any;

@Component({
  selector: 'app-ride-edit',
  templateUrl: './ride-edit.component.html',
  styleUrls: ['./ride-edit.component.css']
})

export class RideEditComponent implements OnInit {
  id: number;
  editMode = false;
  ride: RideModel;
  selectedRideStatus: string;
  selectedCarType: string;
  startAddress: string;
  @ViewChild('CARTYPE') vehicleSelected: ElementRef;
  drivers: DriverModel[] = [];


  marker: Marker;

  vehicleType: string[] = [
    'Not defined',
    'Car',
    'Van'
  ];

  rideStatus = [
    'Created - On waiting',
    'Formed',
    'Processed',
    'Accepted',
    'Called off',
    'Failed',
    'Succeeded'
  ];

  constructor(private route: ActivatedRoute,
              private rideService: RideService,
              private mapService: MapService,
              public myGlobal: Globals) {
    this.marker = new class implements Marker {
      label: string;
      lat: number;
      lng: number;
      locationChoosen: boolean;
    };

    this.marker.lat = 45.267136;
    this.marker.lng = 19.833549;
    this.marker.label = 'A';
    this.marker.locationChoosen = false;
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
    if (this.editMode) {
      this.startAddress = this.ride.startLocation.streetName;
      if (this.ride.startLocation.streetNumber != undefined) this.startAddress += ' ' + this.ride.startLocation.streetNumber;
      if (this.ride.startLocation.cityName !== '') this.startAddress += ', ' + this.ride.startLocation.cityName;
      if (this.ride.startLocation.cityZipcode !== '') this.startAddress += ' ' + this.ride.startLocation.cityZipcode.toString();

    }
  }

  onSubmit() {
    let carType = CarType.not_defined;
    switch (this.vehicleSelected.nativeElement.value) {
      case 'Car':
        carType = CarType.car;
        break;
      case 'Van':
        carType = CarType.van;
        break;
    }

    var split = this.startAddress.split(',');

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
      } else {
        streetNumber = parseInt(tempValue[i], 10);
      }
    }

    for (tempValue = split[1].split(' '), i = 0; i < tempValue.length; ++i) {
      if ( tempValue[i].match(/^[0-9]+$/) == null) {
        city += tempValue[i] + ' ';
      } else
        zipcode = tempValue[i];
    }

    country = split[3];

    if (this.editMode === false) {
      this.rideService.createRide(new LocationModel(this.marker.lat, this.marker.lng, streetNumber, streetName, city, zipcode.toString()), carType)
        .subscribe(
          (data: any) => {
            //console.log(data);
          }
        );
    } else {
      this.rideService.changeAddress(this.ride.rideID,
        new LocationModel(this.marker.lat, this.marker.lng, streetNumber, streetName, city, zipcode))
        .subscribe(
          (data: any) => {
            if (data.change === 'success') {
              console.log('TODO, Feedback on successful change address');
            }
            else {
              console.log('TODO, Feedback on failed change address: ' + data.message);
            }
          }
        );
    }
  }

  onClickMap(event) {
    this.marker.lat = event.coords.lat;
    this.marker.lng = event.coords.lng;
    this.marker.locationChoosen = true;

    var latlng = new google.maps.LatLng(this.marker.lat, this.marker.lng);
    this.mapService.geocode(latlng)
      .subscribe(
        (data: any) => {
          console.log(data[0].formatted_address);
          this.startAddress = data[0].formatted_address;
        }
      );
  }

  private initForm() {
    let rideStatus = '';
    if (this.editMode) {
      this.ride = this.rideService.getRide(this.id);
      switch (this.ride.rideStatus) {
        case RideStatus.created :
          rideStatus = 'Created - On waiting';
          break;
        case RideStatus.accepted:
          rideStatus = 'Accepted';
          break;
        case RideStatus.calledOff:
          rideStatus = 'Called off';
          break;
        case RideStatus.failed:
          rideStatus = 'Failed';
          break;
        case RideStatus.formed:
          rideStatus = 'Formed';
          break;
        case RideStatus.processed:
          rideStatus = 'Processed';
          break;
        case RideStatus.succeeded:
          rideStatus = 'Succeeded';
          break;
      }
      this.selectedRideStatus = rideStatus;
    }
  }

}
