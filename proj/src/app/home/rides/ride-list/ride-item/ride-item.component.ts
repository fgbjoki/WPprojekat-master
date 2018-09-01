import {Component, Input, OnInit} from '@angular/core';
import {RideModel} from '../../../../models/ride.model';
import {RideStatus} from '../../../../models/ride.status';

@Component({
  selector: 'app-ride-item',
  templateUrl: './ride-item.component.html',
  styleUrls: ['./ride-item.component.css']
})
export class RideItemComponent implements OnInit {
  @Input() ride: RideModel;
  @Input() index: number;

  rideStatus = '';

  ngOnInit() {
    // console.log('[debug ride-item]: ' + this.ride.startLocation.streetNumber + ' with index: ' + this.index);
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
}
