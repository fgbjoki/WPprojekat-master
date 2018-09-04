import {CarType} from '../../models/car.types';
import {LocationModel} from '../../models/location.model';

export class DriverModel {
  public DriverID: number;
  public Username: string;
  public Location: LocationModel;
  public vehicleType: CarType;
  public relativePath: number;

  constructor(driverID: number, username: string, vehicleType: CarType, location: LocationModel) {
    this.DriverID = driverID;
    this.Username = username;
    this.vehicleType = vehicleType;
    this.Location = location;
    this.relativePath = 0;
  }
}
