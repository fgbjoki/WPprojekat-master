export class CommentModel {
  Description: string;
  CreateDate: Date;
  ClientID: number;
  RideID: number;
  DriverID: number;
  Grade: number;


  constructor(description: string, createDate: Date, clientID: number, rideID: number, driverID: number, grade: number) {
    this.Description = description;
    this.CreateDate = createDate;
    this.ClientID = clientID;
    this.RideID = rideID;
    this.DriverID = driverID;
    this.Grade = grade;
  }
}
