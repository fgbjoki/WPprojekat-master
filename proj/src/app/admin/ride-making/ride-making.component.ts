import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Marker} from '../../home/rides/models/marker.model';
import {MapService} from '../../map.service';
import {DriverModel} from './driver.model';
import {interval} from 'rxjs';
import {DriverService} from './driver.service';
import {LocationModel} from '../../models/location.model';
import {RideService} from '../../home/rides/ride.service';
import {CarType} from '../../models/car.types';
import {AdminRideService} from './admin.ride.service';

@Component({
  selector: 'app-ride-making',
  templateUrl: './ride-making.component.html',
  styleUrls: ['./ride-making.component.css']
})
export class RideMakingComponent implements OnInit, OnDestroy {

  result: any;
  @ViewChild('CARTYPE') vehicleSelected: ElementRef;
  @ViewChild('driver') driverSelected: ElementRef;

  startAddress: string;
  statuses: string[] = [
    'Formed',
    'Pro'
  ];
  vehicleType: string[] = [
    'Not defined',
    'Car',
    'Van'
  ];
  marker: Marker;
  drivers: DriverModel[] = [];

  constructor(private mapService: MapService, private driverService: DriverService, private rideService: AdminRideService) {

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
    this.result = interval(6000)
      .subscribe(
        (r) => {
          this.driverService.getDrivers()
            .subscribe(
              (data: any) => {
                if (data.get === 'success') {
                  if (this.drivers.length === 0) {
                    this.addAllDrivers(data);
                  } else {
                    this.addIfNotExist(data);
                  }
                }
                this.sortDrivers();
              });
        }
      );
  }

  addAllDrivers(data: any) {
    for (let i = 0; i < data.drivers.length; ++i) {
      this.drivers.push(new DriverModel(data.drivers[i].ID, data.drivers[i].Username,
        data.drivers[i].Vehicle.VehicleType, data.drivers[i].Location));
    }
  }

  addIfNotExist(data: any) {
    // ako postoji uzmi mu lokaciju ako ne postoji brisi ga... jer je zauzet
    for (let i = 0; i < this.drivers.length; ++i) {
      var exists = false;
      for (let j = 0; j < data.drivers.length; ++j) {
        if (this.drivers[i].DriverID === data.drivers[j].ID) {
          this.drivers[i].Location = data.drivers[j].Location;
          exists = true;
          break;
        }
      }
      if (exists === false) {
        this.drivers.splice(i, 1);
      }
    }
  // ako postoji ... nista.. ako ne postoji dodaj ga jer imam novog koji je spreman da radi
    for (let i = 0; i < data.drivers.length; ++i) {
      var exists = false;
      for (let j = 0; j < this.drivers.length; ++j) {
        if (this.drivers[j].DriverID === data.drivers[i].ID) {
          exists = true;
          break;
        }
      }
      if (exists === false) {
        this.drivers.push(data.drivers[i]);
      }
    }
  }

  onSubmit() {
    if (this.driverSelected.nativeElement.value === '' || this.driverSelected.nativeElement.value == null) {
      console.log('TODO, Feedback on HAVE TO SELECT driver');
      return;
    }
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
      if (tempValue[i].match(/^[0-9]+$/) == null) {
        streetName += tempValue[i] + ' ';
      } else {
        streetNumber = parseInt(tempValue[i], 10);
      }
    }

    for (tempValue = split[1].split(' '), i = 0; i < tempValue.length; ++i) {
      if (tempValue[i].match(/^[0-9]+$/) == null) {
        city += tempValue[i] + ' ';
      } else
        zipcode = tempValue[i];
    }

    country = split[3];

    var driver = this.drivers.find( a => a.Username === this.driverSelected.nativeElement.value);

    this.rideService.adminCreateRide(new LocationModel(this.marker.lat, this.marker.lng, streetNumber, streetName, city, zipcode.toString()),
      carType,
      driver.DriverID)
      .subscribe(
        (data: any) => {
          if (data.post === 'success') {
            console.log('TODO, Feedback on success');
          }
          else {
            console.log('TODO, Feedback on fail: ' + data.message);
          }
        }
      );
  }



  onClickMap(event) {
    this.marker.lat = event.coords.lat;
    this.marker.lng = event.coords.lng;
    this.marker.locationChoosen = true;

    let latlng = new google.maps.LatLng(this.marker.lat, this.marker.lng);
    this.mapService.geocode(latlng)
      .subscribe(
        (data: any) => {
          console.log(data[0].formatted_address);
          this.startAddress = data[0].formatted_address;
        }
      );

    this.sortDrivers();
  }

  sortDrivers() {
    for (let i = 0; i < this.drivers.length; ++i) {
      var tempValue;
      tempValue =
        Math.sqrt(Math.pow(
          Math.abs(this.marker.lat - this.drivers[i].Location.lat), 2) +
          Math.pow(Math.abs(this.marker.lng - this.drivers[i].Location.lng), 2));
      this.drivers[i].relativePath = tempValue;
    }

    this.drivers.sort(function(a, b): number {
        if (a.relativePath - b.relativePath > 0) {
          return -1;
        } else {
          return 1;
        }
    });
  }
  ngOnDestroy() {
    this.result.unsubscribe();
  }

  checkDrivers(event) {
    console.log('event: ' + event);
  }
}
