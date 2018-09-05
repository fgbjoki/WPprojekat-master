import {CommentModel} from './comment.model';
import {CarType} from './car.types';
import {RideStatus} from './ride.status';
import {LocationModel} from './location.model';


export class RideModel {
  public rideID: number;
  public timeMade: Date;
  public carType: CarType;
  public driverID: number;
  public adminName: string;
  public price: number;
  public comment: CommentModel;
  public rideStatus: RideStatus;
  public startLocation: LocationModel;
  public endLocation: LocationModel;
  public userID: number;

  constructor(carType: CarType, rideID: number, timeMade: Date,
              driverID: number, adminName: string, price: number,
              comment: CommentModel, rideStatus: RideStatus, startAddress: LocationModel, endLocation: LocationModel, userID: number) {
    this.rideID = rideID;
    this.timeMade = new Date(timeMade);
    this.carType = carType;
    this.driverID = driverID;
    this.adminName = adminName;
    this.price = price;
    this.comment = comment;
    this.rideStatus = rideStatus;
    this.startLocation = startAddress;
    this.endLocation = endLocation;
    this.userID = userID;
  }
}
