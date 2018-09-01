import { Component } from '@angular/core';

import {Globals} from './global';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  loadedFeature = 'register';

  constructor(private myGlobal: Globals) {}

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
