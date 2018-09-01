import {CarType} from './car.types';

export class VehicleModel {
  public CarAge: number;
  public RegistrationPlate: string;
  public TaxiID: string;
  public vehicleType: CarType;

  constructor(year: number, licencePlate: string, taxiID: string, vehicleType: CarType) {
    this.CarAge = year;
    this.RegistrationPlate = licencePlate;
    this.TaxiID = taxiID;
    this.vehicleType = vehicleType;
  }
}
