import {Component, OnDestroy, OnInit} from '@angular/core';
import {RideModel} from '../../../models/ride.model';
import {RideService} from '../ride.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LocationModel} from '../../../models/location.model';

import {interval} from 'rxjs';
import {CarType} from '../../../models/car.types';
import {RideStatus} from '../../../models/ride.status';
import {Globals} from '../../../global';
import {CommentModel} from '../../../models/comment.model';

@Component({
  selector: 'app-ride-list',
  templateUrl: './ride-list.component.html',
  styleUrls: ['./ride-list.component.css']
})
export class RideListComponent implements OnInit, OnDestroy {
  rides: RideModel[] = [];

  constructor(private rideService: RideService,
              private router: Router,
              private route: ActivatedRoute,
              public myGlobal: Globals) { }

  result: any;

  ngOnInit() {
    this.result = interval(6000)
      .subscribe(
        (r) => {
          this.rideService.getRides()
            .subscribe(
              (data: any) => {
                if (data.get === 'success') {
                  // console.log('success array size: ' + data.rides.length);
                  if (data.rides.length >= 0) {
                    this.rides = [];
                  }
                  for (let i = 0; i < data.rides.length; ++i) {
                    console.log('ride[' + i + ']: status: ' + data.rides[i].Status);
                    this.rides.push(new RideModel(data.rides[i].CarType, data.rides[i].RideID, data.rides[i].TimeMade,
                      data.rides[i].DriverID,
                      data.rides[i].AdminName, data.rides[i].Price,
                      new CommentModel(data.rides[i].Comment.Description, data.rides[i].Comment.CreateDate,
                        data.rides[i].Comment.ClientID, data.rides[i].Comment.RideID, data.rides[i].Comment.DriveID,
                        data.rides[i].Comment.Grade),
                      data.rides[i].Status,
                      new LocationModel(data.rides[i].StartLocation.Lat, data.rides[i].StartLocation.Lng,
                        data.rides[i].StartLocation.StreetNumber, data.rides[i].StartLocation.StreetName,
                        data.rides[i].StartLocation.CityName, data.rides[i].StartLocation.CityZipcode), data.rides[i].UserID));
                  }
                } else {
                  this.rides = [];
                }
              }
            );
        }
      );
    this.rideService.getRides()
      .subscribe(
        (data: any) => {
          if (data.get === 'success') {
            // console.log('success array size: ' + data.rides.length);
            if (data.rides.length > 0) {
              this.rides = [];
            }
            for (let i = 0; i < data.rides.length; ++i) {
              /* console.log('ride [' + i + ']: ' + JSON.stringify(data.rides[i]));*/
              this.rides.push(new RideModel(data.rides[i].CarType, data.rides[i].RideID, data.rides[i].TimeMade, data.rides[i].DriverID,
                data.rides[i].AdminName, data.rides[i].Price,
                data.rides[i].Comment, data.rides[i].Status,
                new LocationModel(data.rides[i].StartLocation.Lat, data.rides[i].StartLocation.Lng,
                  data.rides[i].StartLocation.StreetNumber, data.rides[i].StartLocation.StreetName,
                  data.rides[i].StartLocation.CityName, data.rides[i].StartLocation.CityZipCode), data.rides[i].UserID));
            }
          } else {
            this.rides = [];
          }
         /* console.log('array filled: ' + JSON.stringify(this.rides));*/
        }
      );

  }
  ngOnDestroy() {
    this.result.unsubscribe();
  }
  onNewRide() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
