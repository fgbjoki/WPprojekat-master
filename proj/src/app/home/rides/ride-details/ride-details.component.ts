import {Component, OnInit} from '@angular/core';
import {RideModel} from '../../../models/ride.model';
import {RideService} from '../ride.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RideStatus} from '../../../models/ride.status';
import {CarType} from '../../../models/car.types';
import {Globals} from '../../../global';
import {DriverModel} from '../../../admin/ride-making/driver.model';
import {interval} from 'rxjs';
import {DriverService} from '../../../admin/ride-making/driver.service';

@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.css']
})
export class RideDetailsComponent implements OnInit {
  ride: RideModel;
  id: number;
  rideStatus = '';
  drivers: DriverModel[] = [];

  // for interval get drivers
  result: any;

  constructor(private rideService: RideService,
              private route: ActivatedRoute,
              private router: Router,
              public myGlobals: Globals,
              private driverService: DriverService) {
  }

  isHidden(): boolean {
    var returnValue = true;
    if (this.myGlobals.myUser.accessLevel === 1) {
      if (this.ride.rideStatus === 0) {
        returnValue = false;
      }
    }
    return returnValue;
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.ride = this.rideService.getRide(this.id);
          this.rideStatus = '';
           console.log('selected ride status: ' + this.ride.rideStatus);
          switch (this.ride.rideStatus) {
            case RideStatus.created:
              this.rideStatus = 'Created';
              break;
            case RideStatus.failed:
              this.rideStatus = 'Failed';
              break;
            case RideStatus.succeeded:
              this.rideStatus = 'Succeeded';
              break;
            case RideStatus.processed:
              this.rideStatus = 'Processed';
              break;
            case RideStatus.formed:
              this.rideStatus = 'Formed';
              break;
            case RideStatus.calledOff:
              this.rideStatus = 'Canceled';
              break;
            case RideStatus.accepted:
              this.rideStatus = 'Accepted';
              break;
          }
        }
      );
    if (this.myGlobals.myUser.accessLevel === 3) {
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
  }

  addAllDrivers(data: any) {
    for (let i = 0; i < data.drivers.length; ++i) {
      if (data.drivers[i].Vehicle.VehicleType === this.ride.carType || this.ride.carType === CarType.not_defined) {
        console.log('added + ' + data.drivers[i].Username);
        this.drivers.push(new DriverModel(data.drivers[i].ID, data.drivers[i].Username,
          data.drivers[i].Vehicle.VehicleType, data.drivers[i].Location));
      }
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
      if (exists === false && ( this.ride.carType === data.drivers[i].Vehicle.VehicleType || this.ride.carType === CarType.not_defined)) {
        console.log('added + ' + data.drivers[i].Username);
        this.drivers.push(new DriverModel(data.drivers[i].ID, data.drivers[i].Username,
          data.drivers[i].Vehicle.VehicleType, data.drivers[i].Location));
      }
    }
  }

  OnClick(toExecute: string) {
    if (toExecute === 'cancel') {
      this.rideService.cancelRide(this.ride.rideID)
        .subscribe(
          (data: any) => {
            console.log('data: ' + data);
            if (data.cancel === 'success') {
              this.router.navigateByUrl('');
              console.log('[TODO] Feedback, successfully canceled ride');
            } else {
              console.log(data.message);
            }
          }
        );
    }
    else if (toExecute === 'accept') {
      this.acceptRide();
    }
    else if (toExecute === 'failed') {
      this.failedRide();
    }
    else if (toExecute === 'success') {
      this.successRide();
    }
  }

  acceptRide() {
    this.rideService.acceptRide(this.ride.rideID)
      .subscribe(
        (data: any) => {
          if (data.accept === 'success') {
            this.router.navigateByUrl('');
            console.log('[TODO] Feedback, successfully accept ride');
          } else {
            console.log('[TODO] Feedback, failed accept ride : ' + data.message);
          }
        }
      );
  }

  failedRide() {
    this.rideService.failedRide(this.ride.rideID)
      .subscribe(
        (data: any) => {
          if (data.failed === 'success') {
            this.router.navigateByUrl('');
            console.log('[TODO] Feedback, failed ride');
          } else {
            console.log('[TODO] Feedback, ride couldn\'t be failed: ' + data.message);
          }
        }
      );
  }

  successRide() {
    this.rideService.succeededRide(this.ride.rideID)
      .subscribe(
        (data: any) => {
          if (data.succeeded === 'success') {
            this.router.navigateByUrl('');
            console.log('[TODO] Feedback, succeeded ride');
          } else {
            console.log('[TODO] Feedback, succeeded error: ' + data.message);
          }
        }
      );
  }

  sortDrivers() {
    for (let i = 0; i < this.drivers.length; ++i) {
      var tempValue;
      tempValue =
        Math.sqrt(Math.pow(
          Math.abs(this.ride.startLocation.lat - this.drivers[i].Location.lat), 2) +
          Math.pow(Math.abs(this.ride.startLocation.lng - this.drivers[i].Location.lng), 2));
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

}
