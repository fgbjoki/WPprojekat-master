import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './profile/register/register.component';
import { LoginComponent } from './profile/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ModifyComponent } from './profile/modify/modify.component';
import { RideStartComponent } from './home/rides/ride-start/ride-start.component';

import { Globals } from './global';
import { RegisterService } from './profile/register/register-service';
import { DropdownDirective } from './shared/dropdown.directive';
import { LoginService } from './profile/login/login-service';
import { LogoutService } from './profile/logout/logout.component';
import { CookieService } from 'ngx-cookie-service';
import { ModifyService} from './profile/modify/modify.service';
import { RideListComponent } from './home/rides/ride-list/ride-list.component';
import { RideDetailsComponent } from './home/rides/ride-details/ride-details.component';
import { RideItemComponent } from './home/rides/ride-list/ride-item/ride-item.component';
import { RideService } from './home/rides/ride.service';
import { RideEditComponent } from './home/rides/ride-edit/ride-edit.component';
import {MapService} from './map.service';
import {AuthGuard} from './auth-guard.service';
import { DriverPositionComponent } from './driver-position/driver-position.component';
import {DriverGuardService} from './driver-guard.service';
import { AdminComponent } from './admin/admin.component';
import {AdminGuard} from './admin-guard.service';
import { DriverMakingComponent } from './admin/driver-making/driver-making.component';
import {DriverMakingService} from './admin/driver-making/driver-making.service';
import { CommentComponent } from './home/rides/ride-details/comment/comment.component';
import {CommentService} from './home/rides/ride-details/comment/comment.service';
import { RideMakingComponent } from './admin/ride-making/ride-making.component';
import {DriverService} from './admin/ride-making/driver.service';
import {AdminRideService} from './admin/ride-making/admin.ride.service';


const appRoutes: Routes = [
  { path: '', redirectTo: '/rides', pathMatch: 'full' },
  { path: 'rides', canActivate: [AuthGuard], component: HomeComponent, children: [
      { path: '', component: RideStartComponent },
      { path: 'new', component: RideEditComponent },
      { path: ':id', component: RideDetailsComponent},
      { path: ':id/edit', component: RideEditComponent }
    ]},
  { path: 'profile', component: ProfileComponent, children: [
      { path: 'registration', component: RegisterComponent},
      { path: 'login', component: LoginComponent},
      { path: 'modify', canActivate: [AuthGuard], component: ModifyComponent}
    ]},
  { path: 'myPosition', component: DriverPositionComponent, canActivate: [DriverGuardService]},
  { path: 'adminPanel', component: AdminComponent, canActivate: [AdminGuard]}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    DropdownDirective,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    ModifyComponent,
    RideListComponent,
    RideDetailsComponent,
    RideItemComponent,
    RideStartComponent,
    RideEditComponent,
    DriverPositionComponent,
    AdminComponent,
    DriverMakingComponent,
    CommentComponent,
    RideMakingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB_0bSW-dnK8Ihj7RY2ZOqBcBf6JU806DE'
    }),
    HttpModule
  ],
  providers: [
    Globals,
    RegisterService,
    LoginService,
    LogoutService,
    CookieService,
    ModifyService,
    MapService,
    AuthGuard,
    DriverGuardService,
    AdminGuard,
    DriverMakingService,
    CommentService,
    DriverService,
    RideService,
    AdminRideService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
