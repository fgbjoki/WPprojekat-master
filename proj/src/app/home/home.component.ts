import { Component, OnInit } from '@angular/core';
import {Globals} from '../global';
import { AccessLevel } from '../app.model';
import {RideModel} from '../models/ride.model';
import {RideService} from './rides/ride.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RideService]
})
export class HomeComponent implements OnInit {
  selectedRide: RideModel;

  constructor(private myGlobal: Globals,
              private rideService: RideService) { }

  ngOnInit() {
    this.rideService.rideSelected
      .subscribe(
        (ride: RideModel) => {
          this.selectedRide = ride;
        }
      );
  }

}
