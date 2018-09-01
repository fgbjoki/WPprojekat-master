import { User, AccessLevel } from './app.model';
import {Injectable} from '@angular/core';
import {LocationModel} from './models/location.model';

@Injectable()
export class Globals {
  myUser = new User('', '', '', '', '', '', '', '', AccessLevel.user);
  myLocation = new LocationModel(9, 9, 9, '', '', '');
}
