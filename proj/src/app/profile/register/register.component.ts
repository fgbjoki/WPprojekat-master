import {Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {RegisterService} from './register-service';
import {Globals} from '../../global';
import {User, AccessLevel} from '../../app.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') singupForm: NgForm;
  @ViewChild('firstname') firstnameInput: NgModel;
  @ViewChild('lastname') lastnamenameInput: NgModel;
  @ViewChild('username') usernameInput: NgModel;
  @ViewChild('password') passwordInput: NgModel;
  @ViewChild('jmbg') jmbgInput: NgModel;
  @ViewChild('email') emailInput: NgModel;
  @ViewChild('mpNumber') mobiletelephoneInput: NgModel;

  title = 'Register';
  genders = ['male', 'female'];

  selectedGender = '';

  constructor(private myUserService: RegisterService, private myUser: Globals) {}

  onSelectGender(selectedGen): void {
    this.selectedGender = selectedGen;
  }

  onSubmit(): void {

    this.myUserService.saveUser(
      new User(this.usernameInput.value, this.passwordInput.value,
        this.firstnameInput.value, this.lastnamenameInput.value,
        this.jmbgInput.value, this.mobiletelephoneInput.value,
        this.emailInput.value, this.selectedGender, AccessLevel.user))
      .subscribe(
        (response) => console.log(response)
      );
  }
  ngOnInit() {
  }

}
