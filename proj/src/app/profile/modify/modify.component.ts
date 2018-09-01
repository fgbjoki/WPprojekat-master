import { Component, OnInit } from '@angular/core';
import {Globals} from '../../global';
import {ModifyService} from './modify.service';
import {User} from '../../app.model';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {

  constructor(private myGlobal: Globals, private modifyService: ModifyService) { }

  ngOnInit() {
    this.tempFirstname = this.myGlobal.myUser.firstName;
    this.tempLastname = this.myGlobal.myUser.lastname;
    this.tempUsername = this.myGlobal.myUser.username;
    this.tempPassword = this.myGlobal.myUser.password;
    this.tempEmail = this.myGlobal.myUser.email;
    this.tempJMBG = this.myGlobal.myUser.jmbg;
    this.tempMobilePhoneNumber = this.myGlobal.myUser.mobilephoneNumber;
  }

  tempUsername: string;
  tempPassword: string;
  tempFirstname: string;
  tempLastname: string;
  tempEmail: string;
  tempJMBG: string;
  tempMobilePhoneNumber: string;

  onModify(): void {
    this.modifyService.modifyUser(new User(this.tempUsername, this.tempPassword, this.tempFirstname,
      this.tempLastname, this.tempJMBG, this.tempMobilePhoneNumber, this.tempEmail, this.myGlobal.myUser.sex, this.myGlobal.myUser.accessLevel))
      .subscribe(
        (response: any) => {
          if (response.modify === 'success') {
            console.log('success on modify!');
            this.myGlobal.myUser.username = this.tempUsername;
            this.myGlobal.myUser.password = this.tempPassword;
            this.myGlobal.myUser.mobilephoneNumber = this.tempMobilePhoneNumber;
            this.myGlobal.myUser.email = this.tempEmail;
            this.myGlobal.myUser.firstName = this.tempFirstname;
            this.myGlobal.myUser.lastname = this.tempLastname;
            this.myGlobal.myUser.jmbg = this.tempJMBG;
          }
          else {
            console.log('failed on modify!');
          }
        }
      );

  }

}
