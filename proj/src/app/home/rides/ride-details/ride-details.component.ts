import {Component, OnDestroy, OnInit} from '@angular/core';
import {RideModel} from '../../../models/ride.model';
import {RideService} from '../ride.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RideStatus} from '../../../models/ride.status';
import {CarType} from '../../../models/car.types';
import {CommentModel} from '../../../models/comment.model';
import {LocationModel} from '../../../models/location.model';
import {Globals} from '../../../global';

@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.css']
})
export class RideDetailsComponent implements OnInit {
  ride: RideModel;
  id: number;
  rideStatus = '';

  constructor(private rideService: RideService,
              private route: ActivatedRoute,
              private router: Router,
              public myGlobals: Globals) {
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
    console.log('access: ' + this.myGlobals.myUser.accessLevel);
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
          console.log('data ' + data);
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
          console.log('data ' + data);
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
          console.log('data ' + data);
          if (data.succeeded === 'success') {
            this.router.navigateByUrl('');
            console.log('[TODO] Feedback, succeeded ride');
          } else {
            console.log('[TODO] Feedback, succeeded error: ' + data.message);
          }
        }
      );
  }
}
