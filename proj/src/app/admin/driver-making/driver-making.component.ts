import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {AccessLevel, User} from '../../app.model';
import {VehicleModel} from '../../models/vehicle.model';
import {CarType} from '../../models/car.types';
import {DriverMakingService} from './driver-making.service';

@Component({
  selector: 'app-driver-making',
  templateUrl: './driver-making.component.html',
  styleUrls: ['./driver-making.component.css']
})
export class DriverMakingComponent implements OnInit {

  @ViewChild('f') singupForm: NgForm;
  @ViewChild('firstname') firstnameInput: NgModel;
  @ViewChild('lastname') lastnamenameInput: NgModel;
  @ViewChild('username') usernameInput: NgModel;
  @ViewChild('password') passwordInput: NgModel;
  @ViewChild('jmbg') jmbgInput: NgModel;
  @ViewChild('email') emailInput: NgModel;
  @ViewChild('mpNumber') mobiletelephoneInput: NgModel;
  @ViewChild('year') yearInput: NgModel;
  @ViewChild('licencePlate') licencePlateInput: NgModel;
  @ViewChild('taxiID') taxiID: NgModel;
  @ViewChild('CARTYPE') vehicleSelected: ElementRef;


  vehicleType: string[] = [
    'Car',
    'Van'
  ];

  genders = ['male', 'female'];

  selectedGender = '';

  onSelectGender(selectedGen): void {
    this.selectedGender = selectedGen;
  }

  constructor(private driverCreationService: DriverMakingService) { }

  ngOnInit() {
  }

  OnSubmit() {
    console.log('[TODO] Implement add driver');
    const tempUser = new User(this.usernameInput.value, this.passwordInput.value,
      this.firstnameInput.value, this.lastnamenameInput.value,
      this.jmbgInput.value, this.mobiletelephoneInput.value,
      this.emailInput.value, this.selectedGender, AccessLevel.user);

    let carType = CarType.car;
    if (this.vehicleSelected.nativeElement.value !== 'Car') {
      carType = CarType.van;
    }

    const tempVehicle = new VehicleModel(this.yearInput.value, this.licencePlateInput.value, this.taxiID.value, carType);
    this.driverCreationService.createDriver(tempUser, tempVehicle)
      .subscribe(
        (data: any) => {
          if (data.add === 'success') {
            console.log('[TODO] Feedback on driver creation success');
          }
          else {
            console.log('[TODO] Feedback on driver creation failure: ' + data.message);
          }
        }
      );
  }

}

