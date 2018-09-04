(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-guard.service.ts":
/*!****************************************!*\
  !*** ./src/app/admin-guard.service.ts ***!
  \****************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./src/app/global.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = /** @class */ (function () {
    function AdminGuard(myGlobals, router) {
        this.myGlobals = myGlobals;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (route, state) {
        if (this.myGlobals.myUser.username === '') {
            this.router.navigateByUrl('/profile/login');
        }
        else if (this.myGlobals.myUser.accessLevel !== 3) {
            this.router.navigateByUrl('');
        }
        else {
            return true;
        }
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_global__WEBPACK_IMPORTED_MODULE_1__["Globals"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"taxiRequests\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <app-driver-making></app-driver-making>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br/>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <app-ride-making></app-ride-making>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/driver-making/driver-making.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/driver-making/driver-making.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched{\r\n  border: 1px solid red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/driver-making/driver-making.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/driver-making/driver-making.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"OnSubmit()\" #f=\"ngForm\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h1 class=\"page-header\">Create Driver</h1>\n      <div class=\"row\">\n        <div class=\"col-md-7\">\n            <div id=\"user-data\">\n              <div class=\"form-group\">\n                <label for=\"firstname\">Firstname</label>\n                <input\n                  type=\"text\"\n                  id=\"firstname\"\n                  class=\"form-control\"\n                  ngModel\n                  name=\"firstname\"\n                  required\n                  #firstname=\"ngModel\">\n              </div>\n              <span class=\"help-block\" *ngIf=\"!firstname.valid && firstname.touched\">Please enter your Firstname</span>\n              <div class=\"form-group\">\n                <label for=\"lastname\">Lastname</label>\n                <input\n                  type=\"text\"\n                  id=\"lastname\"\n                  class=\"form-control\"\n                  ngModel\n                  name=\"lastname\"\n                  required\n                  #lastname=\"ngModel\"\n                >\n                <span class=\"help-block\" *ngIf=\"!lastname.valid && lastname.touched\">Please enter your Lastname</span>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input\n                  type=\"text\"\n                  id=\"username\"\n                  class=\"form-control\"\n                  ngModel\n                  name=\"username\"\n                  required\n                  #username=\"ngModel\">\n                <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">Please enter your Username</span>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input\n                  type=\"password\"\n                  id=\"password\"\n                  class=\"form-control\"\n                  ngModel\n                  name=\"password\"\n                  required\n                  #password=\"ngModel\">\n                <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">Please enter your Password</span>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input\n                  type=\"text\"\n                  id=\"email\"\n                  name=\"email\"\n                  class=\"form-control\"\n                  ngModel\n                  email\n                  required\n                  #email=\"ngModel\">\n                <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">Please enter your email</span>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"jmbg\">JMBG</label>\n                <input\n                  type=\"text\"\n                  id=\"jmbg\"\n                  class=\"form-control\"\n                  ngModel\n                  name=\"jmbg\"\n                  required\n                  #jmbg=\"ngModel\">\n                <span class=\"help-block\" *ngIf=\"!jmbg.valid && jmbg.touched\">Please enter your JMBG</span>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"mpNumber\">Mobilephone number</label>\n                <input\n                  type=\"text\"\n                  id=\"mpNumber\"\n                  class=\"form-control\"\n                  ngModel\n                  name=\"mpNumber\"\n                  required\n                  #mpNumber=\"ngModel\">\n                <span class=\"help-block\" *ngIf=\"!mpNumber.valid && mpNumber.touched\">Please enter your Mobilephone number</span>\n              </div>\n              <div class=\"radio\" *ngFor=\"let gender of genders; let i = index\">\n                <label>\n                  <input\n                    ngModel\n                    type=\"radio\"\n                    name=\"gender\"\n                    [value]=\"gender\"\n                    (change)=\"onSelectGender(gender)\"\n                    required\n                  >\n                  {{gender}}\n                </label>\n              </div>\n            </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col\">\n      <h1 class=\"page-header\">Ride</h1>\n        <div class=\"col-md-5\">\n            <div id=\"ride-data\">\n              <div class=\"form-group\">\n                <label for=\"year\">Year</label>\n                <input\n                  type=\"text\"\n                  id=\"year\"\n                  class=\"form-control\"\n                  ngModel\n                  name=\"year\"\n                  required\n                  #year=\"ngModel\">\n              </div>\n              <span class=\"help-block\" *ngIf=\"!year.valid && year.touched\">Please enter vehicles year</span>\n              <div class=\"form-group\">\n                <label for=\"licencePlate\">Licence plate</label>\n                <input\n                  type=\"text\"\n                  id=\"licencePlate\"\n                  class=\"form-control\"\n                  ngModel\n                  name=\"licencePlate\"\n                  required\n                  #licencePlate=\"ngModel\"\n                >\n                <span class=\"help-block\" *ngIf=\"!licencePlate.valid && licencePlate.touched\">Please enter your Lastname</span>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"taxiID\">Taxi ID</label>\n                <input\n                  type=\"text\"\n                  id=\"taxiID\"\n                  class=\"form-control\"\n                  ngModel\n                  name=\"taxiID\"\n                  required\n                  #taxiID=\"ngModel\">\n                <span class=\"help-block\" *ngIf=\"!taxiID.valid && taxiID.touched\">Please enter your Username</span>\n              </div>\n            </div>\n          <div class=\"form-group\">\n            <label for=\"carType\">Vehicle type</label>\n            &nbsp;\n            <select\n              id=\"carType\"\n              #CARTYPE>\n              <option *ngFor=\"let vehicle of vehicleType\"\n                      [value]=\"vehicle\"\n              >{{vehicle}}</option>\n            </select>\n          </div>\n        </div>\n    </div>\n  </div>\n\n  <button\n    type=\"submit\"\n    class=\"btn btn-primary\"\n    [disabled]=\"!f.valid\">Create</button>\n</form>\n"

/***/ }),

/***/ "./src/app/admin/driver-making/driver-making.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/driver-making/driver-making.component.ts ***!
  \****************************************************************/
/*! exports provided: DriverMakingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverMakingComponent", function() { return DriverMakingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.model */ "./src/app/app.model.ts");
/* harmony import */ var _models_vehicle_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/vehicle.model */ "./src/app/models/vehicle.model.ts");
/* harmony import */ var _models_car_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/car.types */ "./src/app/models/car.types.ts");
/* harmony import */ var _driver_making_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./driver-making.service */ "./src/app/admin/driver-making/driver-making.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DriverMakingComponent = /** @class */ (function () {
    function DriverMakingComponent(driverCreationService) {
        this.driverCreationService = driverCreationService;
        this.vehicleType = [
            'Car',
            'Van'
        ];
        this.genders = ['male', 'female'];
        this.selectedGender = '';
    }
    DriverMakingComponent.prototype.onSelectGender = function (selectedGen) {
        this.selectedGender = selectedGen;
    };
    DriverMakingComponent.prototype.ngOnInit = function () {
    };
    DriverMakingComponent.prototype.OnSubmit = function () {
        console.log('[TODO] Implement add driver');
        var tempUser = new _app_model__WEBPACK_IMPORTED_MODULE_2__["User"](this.usernameInput.value, this.passwordInput.value, this.firstnameInput.value, this.lastnamenameInput.value, this.jmbgInput.value, this.mobiletelephoneInput.value, this.emailInput.value, this.selectedGender, _app_model__WEBPACK_IMPORTED_MODULE_2__["AccessLevel"].user);
        var carType = _models_car_types__WEBPACK_IMPORTED_MODULE_4__["CarType"].car;
        if (this.vehicleSelected.nativeElement.value !== 'Car') {
            carType = _models_car_types__WEBPACK_IMPORTED_MODULE_4__["CarType"].van;
        }
        var tempVehicle = new _models_vehicle_model__WEBPACK_IMPORTED_MODULE_3__["VehicleModel"](this.yearInput.value, this.licencePlateInput.value, this.taxiID.value, carType);
        this.driverCreationService.createDriver(tempUser, tempVehicle)
            .subscribe(function (data) {
            if (data.add === 'success') {
                console.log('[TODO] Feedback on driver creation success');
            }
            else {
                console.log('[TODO] Feedback on driver creation failure: ' + data.message);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], DriverMakingComponent.prototype, "singupForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('firstname'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"])
    ], DriverMakingComponent.prototype, "firstnameInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('lastname'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"])
    ], DriverMakingComponent.prototype, "lastnamenameInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('username'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"])
    ], DriverMakingComponent.prototype, "usernameInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('password'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"])
    ], DriverMakingComponent.prototype, "passwordInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('jmbg'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"])
    ], DriverMakingComponent.prototype, "jmbgInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('email'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"])
    ], DriverMakingComponent.prototype, "emailInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mpNumber'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"])
    ], DriverMakingComponent.prototype, "mobiletelephoneInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('year'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"])
    ], DriverMakingComponent.prototype, "yearInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('licencePlate'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"])
    ], DriverMakingComponent.prototype, "licencePlateInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('taxiID'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"])
    ], DriverMakingComponent.prototype, "taxiID", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('CARTYPE'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DriverMakingComponent.prototype, "vehicleSelected", void 0);
    DriverMakingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-driver-making',
            template: __webpack_require__(/*! ./driver-making.component.html */ "./src/app/admin/driver-making/driver-making.component.html"),
            styles: [__webpack_require__(/*! ./driver-making.component.css */ "./src/app/admin/driver-making/driver-making.component.css")]
        }),
        __metadata("design:paramtypes", [_driver_making_service__WEBPACK_IMPORTED_MODULE_5__["DriverMakingService"]])
    ], DriverMakingComponent);
    return DriverMakingComponent;
}());



/***/ }),

/***/ "./src/app/admin/driver-making/driver-making.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/driver-making/driver-making.service.ts ***!
  \**************************************************************/
/*! exports provided: DriverMakingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverMakingService", function() { return DriverMakingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DriverMakingService = /** @class */ (function () {
    function DriverMakingService(http, router) {
        this.http = http;
        this.router = router;
    }
    DriverMakingService.prototype.createDriver = function (driver, vehicle) {
        var objectToSend = { user: driver, vehicle: vehicle };
        var head = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:51383/api/user/registerdriver', JSON.stringify(objectToSend), { headers: head })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var data = response.json();
            return data;
        }));
    };
    DriverMakingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DriverMakingService);
    return DriverMakingService;
}());



/***/ }),

/***/ "./src/app/admin/ride-making/driver.model.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/ride-making/driver.model.ts ***!
  \***************************************************/
/*! exports provided: DriverModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverModel", function() { return DriverModel; });
var DriverModel = /** @class */ (function () {
    function DriverModel(driverID, username, vehicleType, location) {
        this.DriverID = driverID;
        this.Username = username;
        this.vehicleType = vehicleType;
        this.Location = location;
        this.relativePath = 0;
    }
    return DriverModel;
}());



/***/ }),

/***/ "./src/app/admin/ride-making/driver.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/ride-making/driver.service.ts ***!
  \*****************************************************/
/*! exports provided: DriverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverService", function() { return DriverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DriverService = /** @class */ (function () {
    function DriverService(http, router) {
        this.http = http;
        this.router = router;
    }
    DriverService.prototype.getDrivers = function () {
        return this.http
            .get('http://localhost:51383/api/user/drivers')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var data = response.json();
            return data;
        }));
    };
    DriverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DriverService);
    return DriverService;
}());



/***/ }),

/***/ "./src/app/admin/ride-making/ride-making.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/ride-making/ride-making.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n  height: 250px;\r\n  width: 300px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/ride-making/ride-making.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/ride-making/ride-making.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <h1 class=\"page-header\">Create Ride</h1>\r\n  <div class=\"col-xs-12\">\r\n    <form (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-6\">\r\n          <button type=\"submit\" class=\"btn btn-success\">Save</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-6\">\r\n          <div class=\"form-group\">\r\n            <label>{{startAddress}}</label>\r\n            <agm-map [latitude]=\"marker.lat\" [longitude]=\"marker.lng\" (mapClick)=\"onClickMap($event)\" [zoom]=\"14\">\r\n              <agm-marker\r\n                [latitude]=\"marker.lat\"\r\n                [longitude]=\"marker.lng\"\r\n                [label]=\"marker.label\"\r\n                id=\"gmApi\"\r\n                *ngIf=\"marker.locationChoosen\"\r\n              ></agm-marker>\r\n            </agm-map>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-6\">\r\n          <div class=\"form-group\">\r\n            <label for=\"CarType\">Vehicle type</label>\r\n            <select\r\n              id=\"CarType\"\r\n              #CARTYPE>\r\n              <option *ngFor=\"let vehicle of vehicleType\"\r\n                      [value]=\"vehicle\"\r\n              >{{vehicle}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-6\">\r\n          <div class=\"form-group\">\r\n            <label for=\"driver\">Driver</label>\r\n            <select\r\n              id=\"driver\"\r\n              #driver>\r\n              <option\r\n                *ngFor=\"let d of drivers; let i = index;\" [ngValue]=\"d\"\r\n              (select)=\"checkDrivers($event.target.value)\">{{d.Username}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/ride-making/ride-making.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/ride-making/ride-making.component.ts ***!
  \************************************************************/
/*! exports provided: RideMakingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideMakingComponent", function() { return RideMakingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../map.service */ "./src/app/map.service.ts");
/* harmony import */ var _driver_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./driver.model */ "./src/app/admin/ride-making/driver.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _driver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./driver.service */ "./src/app/admin/ride-making/driver.service.ts");
/* harmony import */ var _models_location_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/location.model */ "./src/app/models/location.model.ts");
/* harmony import */ var _home_rides_ride_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../home/rides/ride.service */ "./src/app/home/rides/ride.service.ts");
/* harmony import */ var _models_car_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/car.types */ "./src/app/models/car.types.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RideMakingComponent = /** @class */ (function () {
    function RideMakingComponent(mapService, driverService, rideService) {
        this.mapService = mapService;
        this.driverService = driverService;
        this.rideService = rideService;
        this.statuses = [
            'Formed',
            'Pro'
        ];
        this.vehicleType = [
            'Not defined',
            'Car',
            'Van'
        ];
        this.drivers = [];
        this.marker = new /** @class */ (function () {
            function class_1() {
            }
            return class_1;
        }());
        this.marker.lat = 45.267136;
        this.marker.lng = 19.833549;
        this.marker.label = 'A';
        this.marker.locationChoosen = false;
    }
    RideMakingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.result = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(6000)
            .subscribe(function (r) {
            _this.driverService.getDrivers()
                .subscribe(function (data) {
                if (data.get === 'success') {
                    if (_this.drivers.length === 0) {
                        _this.addAllDrivers(data);
                    }
                    else {
                        _this.addIfNotExist(data);
                    }
                }
                _this.sortDrivers();
            });
        });
    };
    RideMakingComponent.prototype.addAllDrivers = function (data) {
        for (var i = 0; i < data.drivers.length; ++i) {
            this.drivers.push(new _driver_model__WEBPACK_IMPORTED_MODULE_2__["DriverModel"](data.drivers[i].ID, data.drivers[i].Username, data.drivers[i].Vehicle.VehicleType, data.drivers[i].Location));
        }
    };
    RideMakingComponent.prototype.addIfNotExist = function (data) {
        // ako postoji uzmi mu lokaciju ako ne postoji brisi ga... jer je zauzet
        for (var i = 0; i < this.drivers.length; ++i) {
            var exists = false;
            for (var j = 0; j < data.drivers.length; ++j) {
                if (this.drivers[i].DriverID === data.drivers[j].ID) {
                    this.drivers[i].Location = data.drivers[j].Location;
                    exists = true;
                    break;
                }
            }
            if (exists === false) {
                this.drivers.splice(i, 1);
            }
        }
        // ako postoji ... nista.. ako ne postoji dodaj ga jer imam novog koji je spreman da radi
        for (var i = 0; i < data.drivers.length; ++i) {
            var exists = false;
            for (var j = 0; j < this.drivers.length; ++j) {
                if (this.drivers[j].DriverID === data.drivers[i].ID) {
                    exists = true;
                    break;
                }
            }
            if (exists === false) {
                this.drivers.push(data.drivers[i]);
            }
        }
    };
    RideMakingComponent.prototype.onSubmit = function () {
        var _this = this;
        var carType = _models_car_types__WEBPACK_IMPORTED_MODULE_7__["CarType"].not_defined;
        switch (this.vehicleSelected.nativeElement.value) {
            case 'Car':
                carType = _models_car_types__WEBPACK_IMPORTED_MODULE_7__["CarType"].car;
                break;
            case 'Van':
                carType = _models_car_types__WEBPACK_IMPORTED_MODULE_7__["CarType"].van;
                break;
        }
        var split = this.startAddress.split(',');
        var tempValue = split[0].split(' ');
        var streetName = '';
        var streetNumber;
        var city = '';
        var zipcode = '';
        var country;
        var i = 0;
        for (; i < tempValue.length; ++i) {
            if (tempValue[i].match(/^[0-9]+$/) == null) {
                streetName += tempValue[i] + ' ';
            }
            else {
                streetNumber = parseInt(tempValue[i], 10);
            }
        }
        for (tempValue = split[1].split(' '), i = 0; i < tempValue.length; ++i) {
            if (tempValue[i].match(/^[0-9]+$/) == null) {
                city += tempValue[i] + ' ';
            }
            else
                zipcode = tempValue[i];
        }
        country = split[3];
        var driver = this.drivers.find(function (a) { return a.Username === _this.driverSelected.nativeElement.value; });
        this.rideService.adminCreateRide(new _models_location_model__WEBPACK_IMPORTED_MODULE_5__["LocationModel"](this.marker.lat, this.marker.lng, streetNumber, streetName, city, zipcode.toString()), carType, driver.DriverID)
            .subscribe(function (data) {
            if (data.post === 'success') {
                console.log('TODO, Feedback on success');
            }
            else {
                console.log('TODO, Feedback on fail: ' + data.message);
            }
        });
    };
    RideMakingComponent.prototype.onClickMap = function (event) {
        var _this = this;
        this.marker.lat = event.coords.lat;
        this.marker.lng = event.coords.lng;
        this.marker.locationChoosen = true;
        var latlng = new google.maps.LatLng(this.marker.lat, this.marker.lng);
        this.mapService.geocode(latlng)
            .subscribe(function (data) {
            console.log(data[0].formatted_address);
            _this.startAddress = data[0].formatted_address;
        });
        this.sortDrivers();
    };
    RideMakingComponent.prototype.sortDrivers = function () {
        for (var i = 0; i < this.drivers.length; ++i) {
            var tempValue;
            tempValue =
                Math.sqrt(Math.pow(Math.abs(this.marker.lat - this.drivers[i].Location.lat), 2) +
                    Math.pow(Math.abs(this.marker.lng - this.drivers[i].Location.lng), 2));
            this.drivers[i].relativePath = tempValue;
        }
        this.drivers.sort(function (a, b) {
            if (a.relativePath - b.relativePath > 0) {
                return -1;
            }
            else {
                return 1;
            }
        });
    };
    RideMakingComponent.prototype.ngOnDestroy = function () {
        this.result.unsubscribe();
    };
    RideMakingComponent.prototype.checkDrivers = function (event) {
        console.log('event: ' + event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('CARTYPE'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RideMakingComponent.prototype, "vehicleSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('driver'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RideMakingComponent.prototype, "driverSelected", void 0);
    RideMakingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ride-making',
            template: __webpack_require__(/*! ./ride-making.component.html */ "./src/app/admin/ride-making/ride-making.component.html"),
            styles: [__webpack_require__(/*! ./ride-making.component.css */ "./src/app/admin/ride-making/ride-making.component.css")]
        }),
        __metadata("design:paramtypes", [_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"], _driver_service__WEBPACK_IMPORTED_MODULE_4__["DriverService"], _home_rides_ride_service__WEBPACK_IMPORTED_MODULE_6__["RideService"]])
    ], RideMakingComponent);
    return RideMakingComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n  <div class=\"col-xs-12 col-sm10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./src/app/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(myGlobal) {
        this.myGlobal = myGlobal;
        this.loadedFeature = 'register';
    }
    AppComponent.prototype.onNavigate = function (feature) {
        this.loadedFeature = feature;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_global__WEBPACK_IMPORTED_MODULE_1__["Globals"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.model.ts":
/*!******************************!*\
  !*** ./src/app/app.model.ts ***!
  \******************************/
/*! exports provided: AccessLevel, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessLevel", function() { return AccessLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var AccessLevel;
(function (AccessLevel) {
    AccessLevel[AccessLevel["guest"] = 0] = "guest";
    AccessLevel[AccessLevel["user"] = 1] = "user";
    AccessLevel[AccessLevel["driver"] = 2] = "driver";
    AccessLevel[AccessLevel["admin"] = 3] = "admin";
})(AccessLevel || (AccessLevel = {}));
var User = /** @class */ (function () {
    function User(username, password, firstname, lastname, jmbg, mobilphoneNumber, email, sex, accessLevel) {
        this.username = username;
        this.password = password;
        this.firstName = firstname;
        this.lastname = lastname;
        this.jmbg = jmbg;
        this.mobilephoneNumber = mobilphoneNumber;
        this.sex = sex;
        this.email = email;
        this.accessLevel = accessLevel;
    }
    User.prototype.logIn = function (username, password, firstname, lastname, jmbg, mobilphoneNumber, email, accessLevel) {
        this.username = username;
        this.password = password;
        this.firstName = firstname;
        this.lastname = lastname;
        this.jmbg = jmbg;
        this.mobilephoneNumber = mobilphoneNumber;
        this.email = email;
        this.accessLevel = accessLevel;
        console.log('logged in, accessLevel: ' + accessLevel);
    };
    User.prototype.logOut = function () {
        this.username = '';
        this.password = '';
        this.firstName = '';
        this.lastname = '';
        this.jmbg = '';
        this.mobilephoneNumber = '';
        this.email = '';
        this.accessLevel = AccessLevel.guest;
    };
    return User;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _profile_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/register/register.component */ "./src/app/profile/register/register.component.ts");
/* harmony import */ var _profile_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/login/login.component */ "./src/app/profile/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _profile_modify_modify_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/modify/modify.component */ "./src/app/profile/modify/modify.component.ts");
/* harmony import */ var _home_rides_ride_start_ride_start_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/rides/ride-start/ride-start.component */ "./src/app/home/rides/ride-start/ride-start.component.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./global */ "./src/app/global.ts");
/* harmony import */ var _profile_register_register_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile/register/register-service */ "./src/app/profile/register/register-service.ts");
/* harmony import */ var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/dropdown.directive */ "./src/app/shared/dropdown.directive.ts");
/* harmony import */ var _profile_login_login_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./profile/login/login-service */ "./src/app/profile/login/login-service.ts");
/* harmony import */ var _profile_logout_logout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./profile/logout/logout.component */ "./src/app/profile/logout/logout.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _profile_modify_modify_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./profile/modify/modify.service */ "./src/app/profile/modify/modify.service.ts");
/* harmony import */ var _home_rides_ride_list_ride_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./home/rides/ride-list/ride-list.component */ "./src/app/home/rides/ride-list/ride-list.component.ts");
/* harmony import */ var _home_rides_ride_details_ride_details_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./home/rides/ride-details/ride-details.component */ "./src/app/home/rides/ride-details/ride-details.component.ts");
/* harmony import */ var _home_rides_ride_list_ride_item_ride_item_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./home/rides/ride-list/ride-item/ride-item.component */ "./src/app/home/rides/ride-list/ride-item/ride-item.component.ts");
/* harmony import */ var _home_rides_ride_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./home/rides/ride.service */ "./src/app/home/rides/ride.service.ts");
/* harmony import */ var _home_rides_ride_edit_ride_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./home/rides/ride-edit/ride-edit.component */ "./src/app/home/rides/ride-edit/ride-edit.component.ts");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./map.service */ "./src/app/map.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _driver_position_driver_position_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./driver-position/driver-position.component */ "./src/app/driver-position/driver-position.component.ts");
/* harmony import */ var _driver_guard_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./driver-guard.service */ "./src/app/driver-guard.service.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_guard_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./admin-guard.service */ "./src/app/admin-guard.service.ts");
/* harmony import */ var _admin_driver_making_driver_making_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./admin/driver-making/driver-making.component */ "./src/app/admin/driver-making/driver-making.component.ts");
/* harmony import */ var _admin_driver_making_driver_making_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./admin/driver-making/driver-making.service */ "./src/app/admin/driver-making/driver-making.service.ts");
/* harmony import */ var _home_rides_ride_details_comment_comment_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./home/rides/ride-details/comment/comment.component */ "./src/app/home/rides/ride-details/comment/comment.component.ts");
/* harmony import */ var _home_rides_ride_details_comment_comment_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./home/rides/ride-details/comment/comment.service */ "./src/app/home/rides/ride-details/comment/comment.service.ts");
/* harmony import */ var _admin_ride_making_ride_making_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./admin/ride-making/ride-making.component */ "./src/app/admin/ride-making/ride-making.component.ts");
/* harmony import */ var _admin_ride_making_driver_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./admin/ride-making/driver.service */ "./src/app/admin/ride-making/driver.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































var appRoutes = [
    { path: '', redirectTo: '/rides', pathMatch: 'full' },
    { path: 'rides', canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]], component: _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], children: [
            { path: '', component: _home_rides_ride_start_ride_start_component__WEBPACK_IMPORTED_MODULE_14__["RideStartComponent"] },
            { path: 'new', component: _home_rides_ride_edit_ride_edit_component__WEBPACK_IMPORTED_MODULE_26__["RideEditComponent"] },
            { path: ':id', component: _home_rides_ride_details_ride_details_component__WEBPACK_IMPORTED_MODULE_23__["RideDetailsComponent"] },
            { path: ':id/edit', component: _home_rides_ride_edit_ride_edit_component__WEBPACK_IMPORTED_MODULE_26__["RideEditComponent"] }
        ] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"], children: [
            { path: 'registration', component: _profile_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
            { path: 'login', component: _profile_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
            { path: 'modify', canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]], component: _profile_modify_modify_component__WEBPACK_IMPORTED_MODULE_13__["ModifyComponent"] }
        ] },
    { path: 'myPosition', component: _driver_position_driver_position_component__WEBPACK_IMPORTED_MODULE_29__["DriverPositionComponent"], canActivate: [_driver_guard_service__WEBPACK_IMPORTED_MODULE_30__["DriverGuardService"]] },
    { path: 'adminPanel', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_31__["AdminComponent"], canActivate: [_admin_guard_service__WEBPACK_IMPORTED_MODULE_32__["AdminGuard"]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _profile_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_17__["DropdownDirective"],
                _profile_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _profile_modify_modify_component__WEBPACK_IMPORTED_MODULE_13__["ModifyComponent"],
                _home_rides_ride_list_ride_list_component__WEBPACK_IMPORTED_MODULE_22__["RideListComponent"],
                _home_rides_ride_details_ride_details_component__WEBPACK_IMPORTED_MODULE_23__["RideDetailsComponent"],
                _home_rides_ride_list_ride_item_ride_item_component__WEBPACK_IMPORTED_MODULE_24__["RideItemComponent"],
                _home_rides_ride_start_ride_start_component__WEBPACK_IMPORTED_MODULE_14__["RideStartComponent"],
                _home_rides_ride_edit_ride_edit_component__WEBPACK_IMPORTED_MODULE_26__["RideEditComponent"],
                _driver_position_driver_position_component__WEBPACK_IMPORTED_MODULE_29__["DriverPositionComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_31__["AdminComponent"],
                _admin_driver_making_driver_making_component__WEBPACK_IMPORTED_MODULE_33__["DriverMakingComponent"],
                _home_rides_ride_details_comment_comment_component__WEBPACK_IMPORTED_MODULE_35__["CommentComponent"],
                _admin_ride_making_ride_making_component__WEBPACK_IMPORTED_MODULE_37__["RideMakingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyB_0bSW-dnK8Ihj7RY2ZOqBcBf6JU806DE'
                }),
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"]
            ],
            providers: [
                _global__WEBPACK_IMPORTED_MODULE_15__["Globals"],
                _profile_register_register_service__WEBPACK_IMPORTED_MODULE_16__["RegisterService"],
                _profile_login_login_service__WEBPACK_IMPORTED_MODULE_18__["LoginService"],
                _profile_logout_logout_component__WEBPACK_IMPORTED_MODULE_19__["LogoutService"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_20__["CookieService"],
                _profile_modify_modify_service__WEBPACK_IMPORTED_MODULE_21__["ModifyService"],
                _map_service__WEBPACK_IMPORTED_MODULE_27__["MapService"],
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"],
                _driver_guard_service__WEBPACK_IMPORTED_MODULE_30__["DriverGuardService"],
                _admin_guard_service__WEBPACK_IMPORTED_MODULE_32__["AdminGuard"],
                _admin_driver_making_driver_making_service__WEBPACK_IMPORTED_MODULE_34__["DriverMakingService"],
                _home_rides_ride_details_comment_comment_service__WEBPACK_IMPORTED_MODULE_36__["CommentService"],
                _admin_ride_making_driver_service__WEBPACK_IMPORTED_MODULE_38__["DriverService"],
                _home_rides_ride_service__WEBPACK_IMPORTED_MODULE_25__["RideService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./src/app/global.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(myGlobals, router) {
        this.myGlobals = myGlobals;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.myGlobals.myUser.username !== '') {
            return true;
        }
        else {
            this.router.navigateByUrl('/profile/login');
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_global__WEBPACK_IMPORTED_MODULE_1__["Globals"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/driver-guard.service.ts":
/*!*****************************************!*\
  !*** ./src/app/driver-guard.service.ts ***!
  \*****************************************/
/*! exports provided: DriverGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverGuardService", function() { return DriverGuardService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./src/app/global.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DriverGuardService = /** @class */ (function () {
    function DriverGuardService(myGlobals, router) {
        this.myGlobals = myGlobals;
        this.router = router;
    }
    DriverGuardService.prototype.canActivate = function (route, state) {
        if (this.myGlobals.myUser.username === '') {
            this.router.navigateByUrl('/profile/login');
        }
        else if (this.myGlobals.myUser.accessLevel === 2) {
            return true;
        }
        else {
            this.router.navigateByUrl('');
        }
    };
    DriverGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_global__WEBPACK_IMPORTED_MODULE_1__["Globals"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], DriverGuardService);
    return DriverGuardService;
}());



/***/ }),

/***/ "./src/app/driver-position/driver-position.component.css":
/*!***************************************************************!*\
  !*** ./src/app/driver-position/driver-position.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n  height: 300px;\r\n  width: 450px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/driver-position/driver-position.component.html":
/*!****************************************************************!*\
  !*** ./src/app/driver-position/driver-position.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>Current address: {{startAddress}}</label>\n<br/>\n<label>Wanted address: {{wantedAddress}}</label>\n<br/>\n<button type=\"submit\" class=\"btn btn-success\"\n        [disabled]=\"marker.lat === wantedMarker.lat && marker.lng === wantedMarker.lng\"\n        (click)=\"OnChangeAddress()\">Change Address</button>\n<agm-map [latitude]=\"marker.lat\" [longitude]=\"marker.lng\" (mapClick)=\"onClickMap($event)\" [zoom]=\"14\">\n  <agm-marker\n    [latitude]=\"marker.lat\"\n    [longitude]=\"marker.lng\"\n    [label]=\"marker.label\"\n    id=\"gmApi1\"\n    *ngIf=\"marker.locationChoosen\"\n  ></agm-marker>\n  <agm-marker\n    [latitude]=\"wantedMarker.lat\"\n    [longitude]=\"wantedMarker.lng\"\n    [label]=\"wantedMarker.label\"\n    id=\"gmApi2\"\n    *ngIf=\"wantedMarker.locationChoosen\"\n  ></agm-marker>\n</agm-map>\nasdasd\n"

/***/ }),

/***/ "./src/app/driver-position/driver-position.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/driver-position/driver-position.component.ts ***!
  \**************************************************************/
/*! exports provided: DriverPositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverPositionComponent", function() { return DriverPositionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global */ "./src/app/global.ts");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../map.service */ "./src/app/map.service.ts");
/* harmony import */ var _models_location_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/location.model */ "./src/app/models/location.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DriverPositionComponent = /** @class */ (function () {
    function DriverPositionComponent(myGlobals, mapService) {
        this.myGlobals = myGlobals;
        this.mapService = mapService;
        this.wantedAddress = '';
        this.marker = new /** @class */ (function () {
            function class_1() {
            }
            return class_1;
        }());
        this.marker.lat = myGlobals.myLocation.lat;
        this.marker.lng = myGlobals.myLocation.lng;
        this.marker.label = 'A';
        this.marker.locationChoosen = true;
        this.wantedMarker = new /** @class */ (function () {
            function class_2() {
            }
            return class_2;
        }());
        this.wantedMarker.lat = myGlobals.myLocation.lat;
        this.wantedMarker.lng = myGlobals.myLocation.lng;
        this.wantedMarker.label = 'B';
        this.wantedMarker.locationChoosen = false;
    }
    DriverPositionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapService.getDriverLocation()
            .subscribe(function (data) {
            if (data.mylocation === 'success') {
                console.log('[TODO] Feedback on success location change');
                _this.myGlobals.myLocation = new _models_location_model__WEBPACK_IMPORTED_MODULE_3__["LocationModel"](data.location.Lat, data.location.Lng, data.location.StreetNumber, data.location.StreetName, data.location.CityName, data.location.CityZipcode);
                console.log(JSON.stringify(_this.myGlobals.myLocation));
                _this.marker.lat = _this.myGlobals.myLocation.lat;
                _this.marker.lng = _this.myGlobals.myLocation.lng;
                _this.startAddress = _this.myGlobals.myLocation.streetName;
                if (_this.myGlobals.myLocation.streetNumber != undefined)
                    _this.startAddress += ' ' + _this.myGlobals.myLocation.streetNumber;
                if (_this.myGlobals.myLocation.cityName !== '')
                    _this.startAddress += ', ' + _this.myGlobals.myLocation.cityName;
                if (_this.myGlobals.myLocation.cityZipcode !== '')
                    _this.startAddress += ' ' + _this.myGlobals.myLocation.cityZipcode;
            }
            else {
                console.log('[TODO] Feedback on failure location change: ' + data.message);
            }
        });
        this.marker.lat = this.myGlobals.myLocation.lat;
        this.marker.lng = this.myGlobals.myLocation.lng;
        this.marker.label = 'A';
        this.marker.locationChoosen = true;
        console.log(JSON.stringify(this.marker));
    };
    DriverPositionComponent.prototype.parseAddress = function (addressToParse) {
        var split = addressToParse.split(',');
        var tempValue = split[0].split(' ');
        var streetName = '';
        var streetNumber;
        var city = '';
        var zipcode = '';
        var country;
        var i = 0;
        for (; i < tempValue.length; ++i) {
            if (tempValue[i].match(/^[0-9]+$/) == null) {
                streetName += tempValue[i] + ' ';
            }
            else
                streetNumber = parseInt(tempValue[i], 10);
        }
        for (tempValue = split[1].split(' '), i = 0; i < tempValue.length; ++i) {
            if (tempValue[i].match(/^[0-9]+$/) == null) {
                city += tempValue[i] + ' ';
            }
            else
                zipcode = tempValue[i];
        }
        var returnString = {
            streetName: streetName, streetNumber: streetNumber, city: city, zipcode: zipcode
        };
        return returnString;
    };
    DriverPositionComponent.prototype.OnChangeAddress = function () {
        var _this = this;
        var tempLocation = this.parseAddress(this.wantedAddress);
        this.mapService.setDriverLocation(tempLocation)
            .subscribe(function (data) {
            if (data.mylocation === 'success') {
                console.log('TODO, Feedback on success changing address');
                _this.marker.lng = _this.wantedMarker.lng;
                _this.marker.lat = _this.wantedMarker.lat;
                _this.startAddress = _this.wantedAddress;
                _this.wantedMarker.locationChoosen = false;
                _this.wantedAddress = '';
            }
            else {
                console.log('TODO, Feedback on failure changing address');
            }
        });
    };
    DriverPositionComponent.prototype.onClickMap = function (event) {
        var _this = this;
        this.wantedMarker.lat = event.coords.lat;
        this.wantedMarker.lng = event.coords.lng;
        this.wantedMarker.locationChoosen = true;
        var latlng = new google.maps.LatLng(this.wantedMarker.lat, this.wantedMarker.lng);
        this.mapService.geocode(latlng)
            .subscribe(function (data) {
            console.log(data[0].formatted_address);
            _this.wantedAddress = data[0].formatted_address;
        });
    };
    DriverPositionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-driver-position',
            template: __webpack_require__(/*! ./driver-position.component.html */ "./src/app/driver-position/driver-position.component.html"),
            styles: [__webpack_require__(/*! ./driver-position.component.css */ "./src/app/driver-position/driver-position.component.css")]
        }),
        __metadata("design:paramtypes", [_global__WEBPACK_IMPORTED_MODULE_1__["Globals"], _map_service__WEBPACK_IMPORTED_MODULE_2__["MapService"]])
    ], DriverPositionComponent);
    return DriverPositionComponent;
}());



/***/ }),

/***/ "./src/app/global.ts":
/*!***************************!*\
  !*** ./src/app/global.ts ***!
  \***************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var _app_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.model */ "./src/app/app.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_location_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/location.model */ "./src/app/models/location.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Globals = /** @class */ (function () {
    function Globals() {
        this.myUser = new _app_model__WEBPACK_IMPORTED_MODULE_0__["User"]('', '', '', '', '', '', '', '', _app_model__WEBPACK_IMPORTED_MODULE_0__["AccessLevel"].user);
        this.myLocation = new _models_location_model__WEBPACK_IMPORTED_MODULE_2__["LocationModel"](9, 9, 9, '', '', '');
    }
    Globals = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Globals);
    return Globals;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n\n      <div class=\"collaps navbar-collapse\">\n        <ul class=\"nav navbar-nav\">\n          <li routerLinkActive=\"active\"><a routerLink=\"/\" *ngIf=\"myGlobal.myUser.username !== ''\">Home</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/myPosition\" *ngIf=\"myGlobal.myUser.accessLevel === 2 && myGlobal.myUser.username !== ''\" >My Position</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/adminPanel\" *ngIf=\"myGlobal.myUser.accessLevel === 3 && myGlobal.myUser.username !== ''\">Admin Panel</a> </li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li class=\"dropdown\" routerLinkActive=\"active\" *ngIf=\"myGlobal.myUser.username ===''\" appDropdown>\n            <a class=\"dropdown-toggle\" role=\"button\">Register / Log in<span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n              <li><a routerLink=\"/profile/registration\">Register</a></li>\n              <li><a routerLink=\"/profile/login\">Log in</a></li>\n            </ul>\n          </li>\n          <li class=\"dropdown\" routerLinkActive=\"active\" *ngIf=\"myGlobal.myUser.username!==''\" appDropdown=\"\">\n            <a class=\"dropdown-toggle\" role=\"button\">Profile / Log out<span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n              <li>\n                <a routerLink=\"profile/modify\" >Modify</a>\n              </li>\n              <li>\n                <a (click)=\"logOut()\">Logout</a>\n              </li>\n            </ul>\n          </li>\n        </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global */ "./src/app/global.ts");
/* harmony import */ var _profile_logout_logout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile/logout/logout.component */ "./src/app/profile/logout/logout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(myGlobal, logoutService, route) {
        this.myGlobal = myGlobal;
        this.logoutService = logoutService;
        this.route = route;
    }
    HeaderComponent.prototype.logOut = function () {
        var _this = this;
        this.logoutService.logOut()
            .subscribe(function (response) {
            if (response.logout === 'success') {
                _this.route.navigateByUrl('/');
                _this.myGlobal.myUser.logOut();
                _this.route.navigateByUrl('/profile/login');
            }
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html")
        }),
        __metadata("design:paramtypes", [_global__WEBPACK_IMPORTED_MODULE_1__["Globals"], _profile_logout_logout_component__WEBPACK_IMPORTED_MODULE_2__["LogoutService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"taxiRequests\">\n      <div class=\"row\">\n        <div class=\"col-md-5\">\n          <app-ride-list></app-ride-list>\n        </div>\n        <div class=\"col-md-7\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global */ "./src/app/global.ts");
/* harmony import */ var _rides_ride_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rides/ride.service */ "./src/app/home/rides/ride.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(myGlobal, rideService) {
        this.myGlobal = myGlobal;
        this.rideService = rideService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rideService.rideSelected
            .subscribe(function (ride) {
            _this.selectedRide = ride;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
            providers: [_rides_ride_service__WEBPACK_IMPORTED_MODULE_2__["RideService"]]
        }),
        __metadata("design:paramtypes", [_global__WEBPACK_IMPORTED_MODULE_1__["Globals"],
            _rides_ride_service__WEBPACK_IMPORTED_MODULE_2__["RideService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/rides/ride-details/comment/comment.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/home/rides/ride-details/comment/comment.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched{\r\n  border: 1px solid red;\r\n}\r\ntextarea.ng-invalid.ng-touched {\r\n  border: 1px solid red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/rides/ride-details/comment/comment.component.html":
/*!************************************************************************!*\
  !*** ./src/app/home/rides/ride-details/comment/comment.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"page-header\">Comment</h1>\n  <div class=\"row\">\n    <div class =\"col-md-3\">\n      <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n        <div id=\"user-data\">\n          <div class=\"form-group\">\n            <label for=\"description\">Description</label>\n            <textarea\n              [disabled]=\"disabled\"\n              type=\"text\"\n              cols=\"180\"\n              rows=\"10\"\n              id=\"description\"\n              class=\"form-control\"\n              [(ngModel)] = \"descriptionInput\"\n              name=\"description\"\n              required\n              #description=\"ngModel\"></textarea>\n          </div>\n          <span class=\"help-block\" *ngIf=\"!description.valid && description.touched\">Please enter the Description</span>\n          <div class=\"form-group\">\n            <label for=\"date\">Date</label>\n            <input\n              disabled = \"true\"\n              type=\"text\"\n              id=\"date\"\n              class=\"form-control\"\n              [(ngModel)] = \"dateInput\"\n              name=\"date\"\n              required = \"true\"\n              #date=\"ngModel\"\n            >\n          </div>\n          <div class=\"form-group\">\n            <label for=\"grade\">Grade</label>\n            <input\n              [disabled]=\"disabled\"\n              type=\"number\"\n              id=\"grade\"\n              class=\"form-control\"\n              [(ngModel)] = \"gradeInput\"\n              min=\"1\"\n              max=\"5\"\n              value=\"1\"\n              name=\"grade\"\n              required\n              #grade=\"ngModel\">\n        </div>\n        <button\n          type=\"submit\"\n          class=\"btn btn-primary\"\n          [disabled]=\"!f.valid && (grade.value >= 0 && grade.value <=5) && disabled\"\n          [hidden]=\"disabled\">Comment</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/rides/ride-details/comment/comment.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/rides/ride-details/comment/comment.component.ts ***!
  \**********************************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_comment_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/comment.model */ "./src/app/models/comment.model.ts");
/* harmony import */ var _models_ride_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/ride.status */ "./src/app/models/ride.status.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global */ "./src/app/global.ts");
/* harmony import */ var _comment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comment.service */ "./src/app/home/rides/ride-details/comment/comment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommentComponent = /** @class */ (function () {
    function CommentComponent(myGlobals, commentService) {
        this.myGlobals = myGlobals;
        this.commentService = commentService;
        this.disabled = true;
    }
    CommentComponent.prototype.ngOnInit = function () {
        if (this.comment.Description !== '' || this.comment.Description === null) {
            console.log('copied');
            this.descriptionInput = this.comment.Description;
            this.gradeInput = this.comment.Grade;
            this.dateInput = this.comment.CreateDate;
        }
        console.log('[debug] description: \'' + this.comment.Description + '\'');
        console.log('[debug] rideStatus: ' + this.rideStatus);
        if (this.myGlobals.myUser.accessLevel === 2) {
            if (this.rideStatus === 5) {
                if (this.comment.Description === '') {
                    this.disabled = false;
                }
            }
        }
        else if (this.myGlobals.myUser.accessLevel === 1) {
            if (this.rideStatus === 4 || this.rideStatus === 6) {
                if (this.comment.Description === '') {
                    this.disabled = false;
                }
            }
        }
        if (this.comment.Description !== '') {
            this.disabled = true;
        }
    };
    CommentComponent.prototype.onSubmit = function () {
        var _this = this;
        this.commentService.sendComment(this.rideID, new _models_comment_model__WEBPACK_IMPORTED_MODULE_1__["CommentModel"](this.descriptionInput, new Date(123123), 0, this.rideID, 0, this.gradeInput))
            .subscribe(function (data) {
            if (data.comment === 'success') {
                console.log('TODO, Feedback on adding a comment');
                _this.disabled = true;
            }
            else {
                console.log('TODO, Feedback on failed comment:' + data.message);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_comment_model__WEBPACK_IMPORTED_MODULE_1__["CommentModel"])
    ], CommentComponent.prototype, "comment", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CommentComponent.prototype, "rideStatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CommentComponent.prototype, "rideID", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], CommentComponent.prototype, "commentForm", void 0);
    CommentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comment',
            template: __webpack_require__(/*! ./comment.component.html */ "./src/app/home/rides/ride-details/comment/comment.component.html"),
            styles: [__webpack_require__(/*! ./comment.component.css */ "./src/app/home/rides/ride-details/comment/comment.component.css")]
        }),
        __metadata("design:paramtypes", [_global__WEBPACK_IMPORTED_MODULE_4__["Globals"], _comment_service__WEBPACK_IMPORTED_MODULE_5__["CommentService"]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/home/rides/ride-details/comment/comment.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/home/rides/ride-details/comment/comment.service.ts ***!
  \********************************************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentService = /** @class */ (function () {
    function CommentService(http) {
        this.http = http;
    }
    CommentService.prototype.sendComment = function (rideID, comment) {
        var head = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:51383/api//ride/addComment', {
            RideID: rideID,
            Comment: comment
        }, { headers: head })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var data = response.json();
            return data;
        }));
    };
    CommentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "./src/app/home/rides/ride-details/ride-details.component.css":
/*!********************************************************************!*\
  !*** ./src/app/home/rides/ride-details/ride-details.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n  height: 100px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/rides/ride-details/ride-details.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/home/rides/ride-details/ride-details.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n\n  </div>\n</div>\n<div class=\"row\" [hidden]=\"isHidden()\">\n  <button type=\"button\" class=\"btn btn-warning\"><a [routerLink]=\"'edit'\">Modify</a></button>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h1>{{ride.startLocation.streetName}} {{ride.startLocation.streetNumber}}</h1>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <div class=\"btn-group\" appDropdown>\n      <button type=\"button\"\n              class=\"btn btn-primary dropdown-toggle\"\n              style=\"cursor:pointer\">\n        Manage Ride <span class=\"caret\"></span>\n      </button>\n      <ul class=\"dropdown-menu\">\n        <li><a style=\"cursor:pointer\" *ngIf=\"myGlobals.myUser.accessLevel === 2 && (ride.rideStatus === 0  || ride.rideStatus === 1)\" (click)=\"OnClick('accept')\">Accept</a></li>\n        <li><a style=\"cursor:pointer\" *ngIf=\"myGlobals.myUser.accessLevel === 1 && (ride.rideStatus === 0  || ride.rideStatus === 1)\" (click)=\"OnClick('cancel')\">Cancel</a></li>\n        <li><a style=\"cursor:pointer\" *ngIf=\"myGlobals.myUser.accessLevel === 2 && (ride.rideStatus === 3 || ride.rideStatus === 2)\" (click)=\"OnClick('failed')\">Failed</a></li>\n        <li><a style=\"cursor:pointer\" *ngIf=\"myGlobals.myUser.accessLevel === 2 && (ride.rideStatus === 3 || ride.rideStatus === 2)\" (click)=\"OnClick('success')\">Successful</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    {{ rideStatus }}\n  </div>\n</div>\n\n<div class=\"row\" *ngIf=\"ride.rideStatus !== 0 && ride.rideStatus !== 1\">\n  <div class=\"col-xs-12\">\n    <app-comment\n    [comment]=\"ride.comment\"\n    [rideStatus]=\"ride.rideStatus\"\n    [rideID]=\"ride.rideID\"></app-comment>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/rides/ride-details/ride-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/rides/ride-details/ride-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: RideDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideDetailsComponent", function() { return RideDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ride_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ride.service */ "./src/app/home/rides/ride.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_ride_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/ride.status */ "./src/app/models/ride.status.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../global */ "./src/app/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RideDetailsComponent = /** @class */ (function () {
    function RideDetailsComponent(rideService, route, router, myGlobals) {
        this.rideService = rideService;
        this.route = route;
        this.router = router;
        this.myGlobals = myGlobals;
        this.rideStatus = '';
    }
    RideDetailsComponent.prototype.isHidden = function () {
        var returnValue = true;
        if (this.myGlobals.myUser.accessLevel === 1) {
            if (this.ride.rideStatus === 0) {
                returnValue = false;
            }
        }
        return returnValue;
    };
    RideDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('access: ' + this.myGlobals.myUser.accessLevel);
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.ride = _this.rideService.getRide(_this.id);
            _this.rideStatus = '';
            console.log('selected ride status: ' + _this.ride.rideStatus);
            switch (_this.ride.rideStatus) {
                case _models_ride_status__WEBPACK_IMPORTED_MODULE_3__["RideStatus"].created:
                    _this.rideStatus = 'Created';
                    break;
                case _models_ride_status__WEBPACK_IMPORTED_MODULE_3__["RideStatus"].failed:
                    _this.rideStatus = 'Failed';
                    break;
                case _models_ride_status__WEBPACK_IMPORTED_MODULE_3__["RideStatus"].succeeded:
                    _this.rideStatus = 'Succeeded';
                    break;
                case _models_ride_status__WEBPACK_IMPORTED_MODULE_3__["RideStatus"].processed:
                    _this.rideStatus = 'Processed';
                    break;
                case _models_ride_status__WEBPACK_IMPORTED_MODULE_3__["RideStatus"].formed:
                    _this.rideStatus = 'Formed';
                    break;
                case _models_ride_status__WEBPACK_IMPORTED_MODULE_3__["RideStatus"].calledOff:
                    _this.rideStatus = 'Canceled';
                    break;
                case _models_ride_status__WEBPACK_IMPORTED_MODULE_3__["RideStatus"].accepted:
                    _this.rideStatus = 'Accepted';
                    break;
            }
        });
    };
    RideDetailsComponent.prototype.OnClick = function (toExecute) {
        var _this = this;
        if (toExecute === 'cancel') {
            this.rideService.cancelRide(this.ride.rideID)
                .subscribe(function (data) {
                console.log('data: ' + data);
                if (data.cancel === 'success') {
                    _this.router.navigateByUrl('');
                    console.log('[TODO] Feedback, successfully canceled ride');
                }
                else {
                    console.log(data.message);
                }
            });
        }
        else if (toExecute === 'accept') {
            this.acceptRide();
        }
        else if (toExecute === 'failed') {
            this.failedRide();
        }
        else if (toExecute === 'success') {
            this.successRide();
        }
    };
    RideDetailsComponent.prototype.acceptRide = function () {
        var _this = this;
        this.rideService.acceptRide(this.ride.rideID)
            .subscribe(function (data) {
            console.log('data ' + data);
            if (data.accept === 'success') {
                _this.router.navigateByUrl('');
                console.log('[TODO] Feedback, successfully accept ride');
            }
            else {
                console.log('[TODO] Feedback, failed accept ride : ' + data.message);
            }
        });
    };
    RideDetailsComponent.prototype.failedRide = function () {
        var _this = this;
        this.rideService.failedRide(this.ride.rideID)
            .subscribe(function (data) {
            console.log('data ' + data);
            if (data.failed === 'success') {
                _this.router.navigateByUrl('');
                console.log('[TODO] Feedback, failed ride');
            }
            else {
                console.log('[TODO] Feedback, ride couldn\'t be failed: ' + data.message);
            }
        });
    };
    RideDetailsComponent.prototype.successRide = function () {
        var _this = this;
        this.rideService.succeededRide(this.ride.rideID)
            .subscribe(function (data) {
            console.log('data ' + data);
            if (data.succeeded === 'success') {
                _this.router.navigateByUrl('');
                console.log('[TODO] Feedback, succeeded ride');
            }
            else {
                console.log('[TODO] Feedback, succeeded error: ' + data.message);
            }
        });
    };
    RideDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ride-details',
            template: __webpack_require__(/*! ./ride-details.component.html */ "./src/app/home/rides/ride-details/ride-details.component.html"),
            styles: [__webpack_require__(/*! ./ride-details.component.css */ "./src/app/home/rides/ride-details/ride-details.component.css")]
        }),
        __metadata("design:paramtypes", [_ride_service__WEBPACK_IMPORTED_MODULE_1__["RideService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _global__WEBPACK_IMPORTED_MODULE_4__["Globals"]])
    ], RideDetailsComponent);
    return RideDetailsComponent;
}());



/***/ }),

/***/ "./src/app/home/rides/ride-edit/ride-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/home/rides/ride-edit/ride-edit.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 250px;\n  width: 300px;\n}\n"

/***/ }),

/***/ "./src/app/home/rides/ride-edit/ride-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/rides/ride-edit/ride-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <form (ngSubmit)=\"onSubmit()\">\n      <div class=\"row\">\n        <div class=\"col-xs-6\">\n          <button type=\"submit\" class=\"btn btn-success\">Save</button>\n          <button type=\"button\" class=\"btn btn-danger\" style=\"margin-left: 50px\" routerLink=\"/\">Cancel</button>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-6\">\n          <div class=\"form-group\">\n            <label>{{startAddress}}</label>\n            <agm-map [latitude]=\"marker.lat\" [longitude]=\"marker.lng\" (mapClick)=\"onClickMap($event)\" [zoom]=\"14\">\n              <agm-marker\n                [latitude]=\"marker.lat\"\n                [longitude]=\"marker.lng\"\n                [label]=\"marker.label\"\n                id=\"gmApi\"\n                *ngIf=\"marker.locationChoosen\"\n                ></agm-marker>\n            </agm-map>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-6\">\n          <div class=\"form-group\">\n            <label for=\"status\">Status</label>\n            <input\n              id=\"status\"\n              [disabled]=\"selectedRideStatus !== 'Create'\"\n              [value]=\"selectedRideStatus == undefined ? 'Create' : selectedRideStatus\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-6\">\n          <div class=\"form-group\">\n            <label for=\"carType\">Vehicle type</label>\n            <select\n              id=\"carType\"\n              [disabled]=\"editMode\"\n              #CARTYPE>\n              <option *ngFor=\"let vehicle of vehicleType\"\n                [value]=\"vehicle\"\n                >{{vehicle}}</option>\n            </select>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/rides/ride-edit/ride-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/rides/ride-edit/ride-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: RideEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideEditComponent", function() { return RideEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ride_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ride.service */ "./src/app/home/rides/ride.service.ts");
/* harmony import */ var _models_ride_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/ride.status */ "./src/app/models/ride.status.ts");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../map.service */ "./src/app/map.service.ts");
/* harmony import */ var _models_location_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/location.model */ "./src/app/models/location.model.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global */ "./src/app/global.ts");
/* harmony import */ var _models_car_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/car.types */ "./src/app/models/car.types.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RideEditComponent = /** @class */ (function () {
    function RideEditComponent(route, rideService, mapService, myGlobal) {
        this.route = route;
        this.rideService = rideService;
        this.mapService = mapService;
        this.myGlobal = myGlobal;
        this.editMode = false;
        this.vehicleType = [
            'Not defined',
            'Car',
            'Van'
        ];
        this.rideStatus = [
            'Created - On waiting',
            'Formed',
            'Processed',
            'Accepted',
            'Called off',
            'Failed',
            'Succeeded'
        ];
        this.marker = new /** @class */ (function () {
            function class_1() {
            }
            return class_1;
        }());
        this.marker.lat = 45.267136;
        this.marker.lng = 19.833549;
        this.marker.label = 'A';
        this.marker.locationChoosen = false;
    }
    RideEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = params['id'] != null;
            _this.initForm();
        });
        if (this.editMode) {
            this.startAddress = this.ride.startLocation.streetName;
            if (this.ride.startLocation.streetNumber != undefined)
                this.startAddress += ' ' + this.ride.startLocation.streetNumber;
            if (this.ride.startLocation.cityName !== '')
                this.startAddress += ', ' + this.ride.startLocation.cityName;
            if (this.ride.startLocation.cityZipcode !== '')
                this.startAddress += ' ' + this.ride.startLocation.cityZipcode.toString();
        }
    };
    RideEditComponent.prototype.onSubmit = function () {
        var carType = _models_car_types__WEBPACK_IMPORTED_MODULE_7__["CarType"].not_defined;
        switch (this.vehicleSelected.nativeElement.value) {
            case 'Car':
                carType = _models_car_types__WEBPACK_IMPORTED_MODULE_7__["CarType"].car;
                break;
            case 'Van':
                carType = _models_car_types__WEBPACK_IMPORTED_MODULE_7__["CarType"].van;
                break;
        }
        var split = this.startAddress.split(',');
        var tempValue = split[0].split(' ');
        var streetName = '';
        var streetNumber;
        var city = '';
        var zipcode = '';
        var country;
        var i = 0;
        for (; i < tempValue.length; ++i) {
            if (tempValue[i].match(/^[0-9]+$/) == null) {
                streetName += tempValue[i] + ' ';
            }
            else {
                streetNumber = parseInt(tempValue[i], 10);
            }
        }
        for (tempValue = split[1].split(' '), i = 0; i < tempValue.length; ++i) {
            if (tempValue[i].match(/^[0-9]+$/) == null) {
                city += tempValue[i] + ' ';
            }
            else
                zipcode = tempValue[i];
        }
        country = split[3];
        if (this.editMode === false) {
            this.rideService.createRide(new _models_location_model__WEBPACK_IMPORTED_MODULE_5__["LocationModel"](this.marker.lat, this.marker.lng, streetNumber, streetName, city, zipcode.toString()), carType)
                .subscribe(function (data) {
                //console.log(data);
            });
        }
        else {
            this.rideService.changeAddress(this.ride.rideID, new _models_location_model__WEBPACK_IMPORTED_MODULE_5__["LocationModel"](this.marker.lat, this.marker.lng, streetNumber, streetName, city, zipcode))
                .subscribe(function (data) {
                if (data.change === 'success') {
                    console.log('TODO, Feedback on successful change address');
                }
                else {
                    console.log('TODO, Feedback on failed change address: ' + data.message);
                }
            });
        }
    };
    RideEditComponent.prototype.onClickMap = function (event) {
        var _this = this;
        this.marker.lat = event.coords.lat;
        this.marker.lng = event.coords.lng;
        this.marker.locationChoosen = true;
        var latlng = new google.maps.LatLng(this.marker.lat, this.marker.lng);
        this.mapService.geocode(latlng)
            .subscribe(function (data) {
            console.log(data[0].formatted_address);
            _this.startAddress = data[0].formatted_address;
        });
    };
    RideEditComponent.prototype.initForm = function () {
        var rideStatus = '';
        if (this.editMode) {
            this.ride = this.rideService.getRide(this.id);
            switch (this.ride.rideStatus) {
                case _models_ride_status__WEBPACK_IMPORTED_MODULE_3__["RideStatus"].created:
                    rideStatus = 'Created - On waiting';
                    break;
                case _models_ride_status__WEBPACK_IMPORTED_MODULE_3__["RideStatus"].accepted:
                    rideStatus = 'Accepted';
                    break;
                case _models_ride_status__WEBPACK_IMPORTED_MODULE_3__["RideStatus"].calledOff:
                    rideStatus = 'Called off';
                    break;
                case _models_ride_status__WEBPACK_IMPORTED_MODULE_3__["RideStatus"].failed:
                    rideStatus = 'Failed';
                    break;
                case _models_ride_status__WEBPACK_IMPORTED_MODULE_3__["RideStatus"].formed:
                    rideStatus = 'Formed';
                    break;
                case _models_ride_status__WEBPACK_IMPORTED_MODULE_3__["RideStatus"].processed:
                    rideStatus = 'Processed';
                    break;
                case _models_ride_status__WEBPACK_IMPORTED_MODULE_3__["RideStatus"].succeeded:
                    rideStatus = 'Succeeded';
                    break;
            }
            this.selectedRideStatus = rideStatus;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('CARTYPE'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RideEditComponent.prototype, "vehicleSelected", void 0);
    RideEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ride-edit',
            template: __webpack_require__(/*! ./ride-edit.component.html */ "./src/app/home/rides/ride-edit/ride-edit.component.html"),
            styles: [__webpack_require__(/*! ./ride-edit.component.css */ "./src/app/home/rides/ride-edit/ride-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ride_service__WEBPACK_IMPORTED_MODULE_2__["RideService"],
            _map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"],
            _global__WEBPACK_IMPORTED_MODULE_6__["Globals"]])
    ], RideEditComponent);
    return RideEditComponent;
}());



/***/ }),

/***/ "./src/app/home/rides/ride-list/ride-item/ride-item.component.css":
/*!************************************************************************!*\
  !*** ./src/app/home/rides/ride-list/ride-item/ride-item.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/rides/ride-list/ride-item/ride-item.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/home/rides/ride-list/ride-item/ride-item.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a\n  style=\"cursor: pointer\"\n  [routerLink] = \"[index]\"\n  routerLinkActive=\"active\"\n  class=\"list-group-item clearfix\">\n  <div class=\"pull-left\">\n    <h4 class=\"list-group-item-heading\">{{ride.startLocation.streetName}} {{ride.startLocation.streetNumber}}</h4>\n    <p class=\"list-group-item-text\">{{rideStatus}}</p>\n  </div>\n</a>\n"

/***/ }),

/***/ "./src/app/home/rides/ride-list/ride-item/ride-item.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/home/rides/ride-list/ride-item/ride-item.component.ts ***!
  \***********************************************************************/
/*! exports provided: RideItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideItemComponent", function() { return RideItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_ride_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/ride.model */ "./src/app/models/ride.model.ts");
/* harmony import */ var _models_ride_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/ride.status */ "./src/app/models/ride.status.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RideItemComponent = /** @class */ (function () {
    function RideItemComponent() {
        this.rideStatus = '';
    }
    RideItemComponent.prototype.ngOnInit = function () {
        // console.log('[debug ride-item]: ' + this.ride.startLocation.streetNumber + ' with index: ' + this.index);
        switch (this.ride.rideStatus) {
            case _models_ride_status__WEBPACK_IMPORTED_MODULE_2__["RideStatus"].created:
                this.rideStatus = 'Created';
                break;
            case _models_ride_status__WEBPACK_IMPORTED_MODULE_2__["RideStatus"].failed:
                this.rideStatus = 'Failed';
                break;
            case _models_ride_status__WEBPACK_IMPORTED_MODULE_2__["RideStatus"].succeeded:
                this.rideStatus = 'Succeeded';
                break;
            case _models_ride_status__WEBPACK_IMPORTED_MODULE_2__["RideStatus"].processed:
                this.rideStatus = 'Processed';
                break;
            case _models_ride_status__WEBPACK_IMPORTED_MODULE_2__["RideStatus"].formed:
                this.rideStatus = 'Formed';
                break;
            case _models_ride_status__WEBPACK_IMPORTED_MODULE_2__["RideStatus"].calledOff:
                this.rideStatus = 'Canceled';
                break;
            case _models_ride_status__WEBPACK_IMPORTED_MODULE_2__["RideStatus"].accepted:
                this.rideStatus = 'Accepted';
                break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_ride_model__WEBPACK_IMPORTED_MODULE_1__["RideModel"])
    ], RideItemComponent.prototype, "ride", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RideItemComponent.prototype, "index", void 0);
    RideItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ride-item',
            template: __webpack_require__(/*! ./ride-item.component.html */ "./src/app/home/rides/ride-list/ride-item/ride-item.component.html"),
            styles: [__webpack_require__(/*! ./ride-item.component.css */ "./src/app/home/rides/ride-list/ride-item/ride-item.component.css")]
        })
    ], RideItemComponent);
    return RideItemComponent;
}());



/***/ }),

/***/ "./src/app/home/rides/ride-list/ride-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/home/rides/ride-list/ride-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/rides/ride-list/ride-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/rides/ride-list/ride-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <button *ngIf=\"myGlobal.myUser.accessLevel === 1\" class=\"btn btn-success\" (click)=\"onNewRide()\">New Ride</button>\n    </div>\n    <hr>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-3\">\n      <app-ride-item\n        *ngFor=\"let rideEl of rides; let i = index\"\n        [ride]=\"rideEl\"\n        [index]=\"i\"></app-ride-item>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/rides/ride-list/ride-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/rides/ride-list/ride-list.component.ts ***!
  \*************************************************************/
/*! exports provided: RideListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideListComponent", function() { return RideListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_ride_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/ride.model */ "./src/app/models/ride.model.ts");
/* harmony import */ var _ride_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ride.service */ "./src/app/home/rides/ride.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_location_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/location.model */ "./src/app/models/location.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global */ "./src/app/global.ts");
/* harmony import */ var _models_comment_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/comment.model */ "./src/app/models/comment.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RideListComponent = /** @class */ (function () {
    function RideListComponent(rideService, router, route, myGlobal) {
        this.rideService = rideService;
        this.router = router;
        this.route = route;
        this.myGlobal = myGlobal;
        this.rides = [];
    }
    RideListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.result = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(6000)
            .subscribe(function (r) {
            _this.rideService.getRides()
                .subscribe(function (data) {
                if (data.get === 'success') {
                    // console.log('success array size: ' + data.rides.length);
                    if (data.rides.length >= 0) {
                        _this.rides = [];
                    }
                    for (var i = 0; i < data.rides.length; ++i) {
                        _this.rides.push(new _models_ride_model__WEBPACK_IMPORTED_MODULE_1__["RideModel"](data.rides[i].CarType, data.rides[i].RideID, data.rides[i].TimeMade, data.rides[i].DriverID, data.rides[i].AdminName, data.rides[i].Price, new _models_comment_model__WEBPACK_IMPORTED_MODULE_7__["CommentModel"](data.rides[i].Comment.Description, data.rides[i].Comment.CreateDate, data.rides[i].Comment.ClientID, data.rides[i].Comment.RideID, data.rides[i].Comment.DriveID, data.rides[i].Comment.Grade), data.rides[i].Status, new _models_location_model__WEBPACK_IMPORTED_MODULE_4__["LocationModel"](data.rides[i].StartLocation.Lat, data.rides[i].StartLocation.Lng, data.rides[i].StartLocation.StreetNumber, data.rides[i].StartLocation.StreetName, data.rides[i].StartLocation.CityName, data.rides[i].StartLocation.CityZipcode), data.rides[i].UserID));
                    }
                }
                else {
                    _this.rides = [];
                }
            });
        });
        this.rideService.getRides()
            .subscribe(function (data) {
            if (data.get === 'success') {
                // console.log('success array size: ' + data.rides.length);
                if (data.rides.length > 0) {
                    _this.rides = [];
                }
                for (var i = 0; i < data.rides.length; ++i) {
                    /* console.log('ride [' + i + ']: ' + JSON.stringify(data.rides[i]));*/
                    _this.rides.push(new _models_ride_model__WEBPACK_IMPORTED_MODULE_1__["RideModel"](data.rides[i].CarType, data.rides[i].RideID, data.rides[i].TimeMade, data.rides[i].DriverID, data.rides[i].AdminName, data.rides[i].Price, data.rides[i].Comment, data.rides[i].Status, new _models_location_model__WEBPACK_IMPORTED_MODULE_4__["LocationModel"](data.rides[i].StartLocation.Lat, data.rides[i].StartLocation.Lng, data.rides[i].StartLocation.StreetNumber, data.rides[i].StartLocation.StreetName, data.rides[i].StartLocation.CityName, data.rides[i].StartLocation.CityZipCode), data.rides[i].UserID));
                }
            }
            else {
                _this.rides = [];
            }
            /* console.log('array filled: ' + JSON.stringify(this.rides));*/
        });
    };
    RideListComponent.prototype.ngOnDestroy = function () {
        this.result.unsubscribe();
    };
    RideListComponent.prototype.onNewRide = function () {
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    RideListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ride-list',
            template: __webpack_require__(/*! ./ride-list.component.html */ "./src/app/home/rides/ride-list/ride-list.component.html"),
            styles: [__webpack_require__(/*! ./ride-list.component.css */ "./src/app/home/rides/ride-list/ride-list.component.css")]
        }),
        __metadata("design:paramtypes", [_ride_service__WEBPACK_IMPORTED_MODULE_2__["RideService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _global__WEBPACK_IMPORTED_MODULE_6__["Globals"]])
    ], RideListComponent);
    return RideListComponent;
}());



/***/ }),

/***/ "./src/app/home/rides/ride-start/ride-start.component.css":
/*!****************************************************************!*\
  !*** ./src/app/home/rides/ride-start/ride-start.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/rides/ride-start/ride-start.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/home/rides/ride-start/ride-start.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Please select a Ride!</h3>\n"

/***/ }),

/***/ "./src/app/home/rides/ride-start/ride-start.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/rides/ride-start/ride-start.component.ts ***!
  \***************************************************************/
/*! exports provided: RideStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideStartComponent", function() { return RideStartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RideStartComponent = /** @class */ (function () {
    function RideStartComponent() {
    }
    RideStartComponent.prototype.ngOnInit = function () {
    };
    RideStartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ride-start',
            template: __webpack_require__(/*! ./ride-start.component.html */ "./src/app/home/rides/ride-start/ride-start.component.html"),
            styles: [__webpack_require__(/*! ./ride-start.component.css */ "./src/app/home/rides/ride-start/ride-start.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RideStartComponent);
    return RideStartComponent;
}());



/***/ }),

/***/ "./src/app/home/rides/ride.service.ts":
/*!********************************************!*\
  !*** ./src/app/home/rides/ride.service.ts ***!
  \********************************************/
/*! exports provided: RideService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideService", function() { return RideService; });
/* harmony import */ var _models_ride_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/ride.model */ "./src/app/models/ride.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_location_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/location.model */ "./src/app/models/location.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_comment_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/comment.model */ "./src/app/models/comment.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RideService = /** @class */ (function () {
    function RideService(http, router) {
        this.http = http;
        this.router = router;
        this.rideSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rides = [];
    }
    RideService.prototype.getRides = function () {
        var _this = this;
        return this.http
            .get('http://localhost:51383/api/ride')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var data = response.json();
            _this.populateRides(data);
            return data;
        }));
    };
    RideService.prototype.cancelRide = function (rideID) {
        var head = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:51383/api/ride/cancelride', JSON.stringify(rideID), { headers: head })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var data = response.json();
            return data;
        }));
    };
    RideService.prototype.acceptRide = function (rideID) {
        var head = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:51383/api/ride/acceptride', JSON.stringify(rideID), { headers: head })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var data = response.json();
            return data;
        }));
    };
    RideService.prototype.failedRide = function (rideID) {
        var head = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:51383/api/ride/failedride', JSON.stringify(rideID), { headers: head })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var data = response.json();
            return data;
        }));
    };
    RideService.prototype.succeededRide = function (rideID) {
        var head = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:51383/api/ride/successride', JSON.stringify(rideID), { headers: head })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var data = response.json();
            return data;
        }));
    };
    RideService.prototype.changeAddress = function (rideID, newLocation) {
        var head = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:51383/api/ride/changeRideAddress', {
            RideID: rideID,
            NewLocation: newLocation
        }, { headers: head })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var data = response.json();
            return data;
        }));
    };
    RideService.prototype.populateRides = function (data) {
        for (var i = 0; i < data.rides.length; ++i) {
            this.rides = [];
            this.rides.push(new _models_ride_model__WEBPACK_IMPORTED_MODULE_0__["RideModel"](data.rides[i].CarType, data.rides[i].RideID, data.rides[i].TimeMade, data.rides[i].DriverID, data.rides[i].AdminName, data.rides[i].Price, new _models_comment_model__WEBPACK_IMPORTED_MODULE_6__["CommentModel"](data.rides[i].Comment.Description, data.rides[i].Comment.CreateDate, data.rides[i].Comment.ClientID, data.rides[i].Comment.RideID, data.rides[i].Comment.DriveID, data.rides[i].Comment.Grade), data.rides[i].Status, new _models_location_model__WEBPACK_IMPORTED_MODULE_4__["LocationModel"](data.rides[i].StartLocation.Lat, data.rides[i].StartLocation.Lng, data.rides[i].StartLocation.StreetNumber, data.rides[i].StartLocation.StreetName, data.rides[i].StartLocation.CityName, data.rides[i].StartLocation.CityZipCode), data.rides[i].UserID));
        }
    };
    RideService.prototype.getRide = function (index) {
        console.log('getRide index: ' + index);
        for (var i = 0; i < this.rides.length; ++i) {
            console.log('getRide requested: ' + this.rides[i].startLocation.streetName);
        }
        return this.rides[index];
    };
    RideService.prototype.createRide = function (location, carType) {
        var head = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        console.log('[debug] sending JSON for adding a ride:' + JSON.stringify({ Location: location, CarType: carType }));
        return this.http.post('http://localhost:51383/api/ride/usercreated', JSON.stringify({ Location: location, CarType: carType }), { headers: head });
    };
    RideService.prototype.adminCreateRide = function (location, carType, driverID) {
        var head = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:51383/api/ride/admincreated', JSON.stringify({ Location: location, CarType: carType }), { headers: head });
    };
    RideService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RideService);
    return RideService;
}());



/***/ }),

/***/ "./src/app/map.service.ts":
/*!********************************!*\
  !*** ./src/app/map.service.ts ***!
  \********************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/global.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapService = /** @class */ (function () {
    function MapService(http, myGlobals) {
        this.http = http;
        this.myGlobals = myGlobals;
    }
    MapService.prototype.findLocation = function (address) {
        var geocoder = new google.maps.Geocoder();
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
            geocoder.geocode({ address: address }, (function (results, status) {
                console.log('findLocatioN:' + JSON.stringify(results));
                if (status === google.maps.GeocoderStatus.OK) {
                    observer.next(results);
                    observer.complete();
                }
                else {
                    console.log('Geocoding service: geocoder failed due to: ' + status);
                    observer.error(status);
                }
            }));
        });
    };
    MapService.prototype.getDriverLocation = function () {
        return this.http
            .get('http://localhost:51383/api/user/driverlocation')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var data = response.json();
            console.log('getDriverLocation: ' + JSON.stringify(data));
            return data;
        }));
    };
    MapService.prototype.setDriverLocation = function (location) {
        var head = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:51383/api/user/driverlocation', {
            newLocation: {
                Lat: location.lat,
                Lng: location.lng,
                StreetNumber: location.streetNumber,
                StreetName: location.streetName,
                CityName: location.cityName,
                CityZipcode: location.cityZipcode
            }
        }, { headers: head })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var data = response.json();
            return data;
        }));
    };
    MapService.prototype.geocode = function (latLng) {
        var geocoder = new google.maps.Geocoder();
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
            geocoder.geocode({ location: latLng }, (function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    observer.next(results);
                    observer.complete();
                }
                else {
                    console.log('Geocoding service: geocoder failed due to: ' + status);
                    observer.error(status);
                }
            }));
        });
    };
    MapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _global__WEBPACK_IMPORTED_MODULE_3__["Globals"]])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/models/car.types.ts":
/*!*************************************!*\
  !*** ./src/app/models/car.types.ts ***!
  \*************************************/
/*! exports provided: CarType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarType", function() { return CarType; });
var CarType;
(function (CarType) {
    CarType[CarType["not_defined"] = 0] = "not_defined";
    CarType[CarType["car"] = 1] = "car";
    CarType[CarType["van"] = 2] = "van";
})(CarType || (CarType = {}));


/***/ }),

/***/ "./src/app/models/comment.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/comment.model.ts ***!
  \*****************************************/
/*! exports provided: CommentModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentModel", function() { return CommentModel; });
var CommentModel = /** @class */ (function () {
    function CommentModel(description, createDate, clientID, rideID, driverID, grade) {
        this.Description = description;
        this.CreateDate = createDate;
        this.ClientID = clientID;
        this.RideID = rideID;
        this.DriverID = driverID;
        this.Grade = grade;
    }
    return CommentModel;
}());



/***/ }),

/***/ "./src/app/models/location.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/location.model.ts ***!
  \******************************************/
/*! exports provided: LocationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationModel", function() { return LocationModel; });
var LocationModel = /** @class */ (function () {
    function LocationModel(lat, lng, streetNumber, streetName, cityName, cityZipcode) {
        this.lat = lat;
        this.lng = lng;
        this.streetName = streetName;
        this.streetNumber = streetNumber;
        this.cityName = cityName;
        this.cityZipcode = cityZipcode;
    }
    return LocationModel;
}());



/***/ }),

/***/ "./src/app/models/ride.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/ride.model.ts ***!
  \**************************************/
/*! exports provided: RideModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideModel", function() { return RideModel; });
var RideModel = /** @class */ (function () {
    function RideModel(carType, rideID, timeMade, driverID, adminName, price, comment, rideStatus, startAddress, userID) {
        this.rideID = rideID;
        this.timeMade = timeMade;
        this.carType = carType;
        this.driverID = driverID;
        this.adminName = adminName;
        this.price = price;
        this.comment = comment;
        this.rideStatus = rideStatus;
        this.startLocation = startAddress;
        this.userID = userID;
    }
    return RideModel;
}());



/***/ }),

/***/ "./src/app/models/ride.status.ts":
/*!***************************************!*\
  !*** ./src/app/models/ride.status.ts ***!
  \***************************************/
/*! exports provided: RideStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideStatus", function() { return RideStatus; });
var RideStatus;
(function (RideStatus) {
    RideStatus[RideStatus["created"] = 0] = "created";
    RideStatus[RideStatus["formed"] = 1] = "formed";
    RideStatus[RideStatus["processed"] = 2] = "processed";
    RideStatus[RideStatus["accepted"] = 3] = "accepted";
    RideStatus[RideStatus["calledOff"] = 4] = "calledOff";
    RideStatus[RideStatus["failed"] = 5] = "failed";
    RideStatus[RideStatus["succeeded"] = 6] = "succeeded";
})(RideStatus || (RideStatus = {}));


/***/ }),

/***/ "./src/app/models/vehicle.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/vehicle.model.ts ***!
  \*****************************************/
/*! exports provided: VehicleModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleModel", function() { return VehicleModel; });
var VehicleModel = /** @class */ (function () {
    function VehicleModel(year, licencePlate, taxiID, vehicleType) {
        this.CarAge = year;
        this.RegistrationPlate = licencePlate;
        this.TaxiID = taxiID;
        this.vehicleType = vehicleType;
    }
    return VehicleModel;
}());



/***/ }),

/***/ "./src/app/profile/login/login-service.ts":
/*!************************************************!*\
  !*** ./src/app/profile/login/login-service.ts ***!
  \************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global */ "./src/app/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginService = /** @class */ (function () {
    function LoginService(http, cookieService, myGlobals) {
        this.http = http;
        this.cookieService = cookieService;
        this.myGlobals = myGlobals;
    }
    LoginService.prototype.logIn = function (username, password) {
        var param = JSON.stringify((_a = {},
            _a['username'] = username,
            _a['password'] = password,
            _a));
        var head = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:51383/api/user/login', param, { headers: head, withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            var data = response.json();
            return data;
        }));
        var _a;
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], _global__WEBPACK_IMPORTED_MODULE_4__["Globals"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/profile/login/login.component.css":
/*!***************************************************!*\
  !*** ./src/app/profile/login/login.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched{\n  border: 1px solid red;\n}\n"

/***/ }),

/***/ "./src/app/profile/login/login.component.html":
/*!****************************************************!*\
  !*** ./src/app/profile/login/login.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"page-header\" style=\"align-items: center;\">Log in</h1>\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n        <div id=\"user-data\">\n          <div class=\"form-group\">\n\n            <label for=\"username\">Username</label>\n            <input\n              type=\"text\"\n              id=\"username\"\n              class=\"form-control\"\n              ngModel\n              name=\"username\"\n              required\n              #username=\"ngModel\">\n            <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">Please enter your Username</span>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input\n              type=\"password\"\n              id=\"password\"\n              class=\"form-control\"\n              ngModel\n              name=\"password\"\n              required\n              #password=\"ngModel\">\n            <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">Please enter your Password</span>\n          </div>\n\n        </div>\n        <button style=\"align-items: center;\"\n          type=\"submit\"\n          class=\"btn btn-primary\"\n          [disabled]=\"!f.valid\">Log in</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/profile/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global */ "./src/app/global.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-service */ "./src/app/profile/login/login-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../map.service */ "./src/app/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(myUserService, myUser, router, mapService) {
        this.myUserService = myUserService;
        this.myUser = myUser;
        this.router = router;
        this.mapService = mapService;
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.myUserService.logIn(this.usernameInput.value, this.passwordInput.value)
            .subscribe(function (response) {
            if (response.login === 'success') {
                _this.myUser.myUser.logIn(response.user.Username, response.user.Password, response.user.Firstname, response.user.Lastname, response.user.JMBG, response.user.MobilePhoneNumber, response.user.Email, response.user.AccessLevel);
                if (response.user.AccessLevel === 2) {
                    _this.mapService.getDriverLocation()
                        .subscribe(function (data) {
                        if (data.mylocation === 'success') {
                            console.log('[TODO] Feedback on success location change');
                            _this.myUser.myLocation = data.location;
                        }
                        else {
                            console.log('[TODO] Feedback on failure location change: ' + data.message);
                        }
                    });
                }
                _this.router.navigateByUrl('/');
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('username'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"])
    ], LoginComponent.prototype, "usernameInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('password'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"])
    ], LoginComponent.prototype, "passwordInput", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/profile/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/profile/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _global__WEBPACK_IMPORTED_MODULE_1__["Globals"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _map_service__WEBPACK_IMPORTED_MODULE_5__["MapService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/logout/logout.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/logout/logout.component.ts ***!
  \****************************************************/
/*! exports provided: LogoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutService", function() { return LogoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutService = /** @class */ (function () {
    function LogoutService(http, router) {
        this.http = http;
        this.router = router;
    }
    LogoutService.prototype.logOut = function () {
        return this.http.post('http://localhost:51383/api/user/logout', '')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var data = response.json();
            console.log(data);
            return data;
        }));
    };
    LogoutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LogoutService);
    return LogoutService;
}());



/***/ }),

/***/ "./src/app/profile/modify/modify.component.css":
/*!*****************************************************!*\
  !*** ./src/app/profile/modify/modify.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched{\n  border: 1px solid red;\n}\n"

/***/ }),

/***/ "./src/app/profile/modify/modify.component.html":
/*!******************************************************!*\
  !*** ./src/app/profile/modify/modify.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"page-header\">Modify</h1>\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <form (ngSubmit)=\"onModify()\" #f=\"ngForm\">\n        <div id=\"user-data\">\n          <div class=\"form-group\">\n            <label for=\"firstname\">Firstname</label>\n            <input\n              type=\"text\"\n              id=\"firstname\"\n              class=\"form-control\"\n              [(ngModel)] = \"tempFirstname\"\n              name=\"firstname\"\n              required\n              #firstname=\"ngModel\">\n          </div>\n          <span class=\"help-block\" *ngIf=\"!firstname.valid && firstname.touched\">Please enter your Firstname</span>\n          <div class=\"form-group\">\n            <label for=\"lastname\">Lastname</label>\n            <input\n              type=\"text\"\n              id=\"lastname\"\n              class=\"form-control\"\n              [(ngModel)] = \"tempLastname\"\n              name=\"lastname\"\n              required\n              #lastname=\"ngModel\"\n            >\n            <span class=\"help-block\" *ngIf=\"!lastname.valid && lastname.touched\">Please enter your Lastname</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input\n              type=\"text\"\n              id=\"username\"\n              class=\"form-control\"\n              [(ngModel)] = \"tempUsername\"\n              name=\"username\"\n              required\n              #username=\"ngModel\">\n            <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">Please enter your Username</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input\n              type=\"password\"\n              id=\"password\"\n              class=\"form-control\"\n              [(ngModel)] = \"tempPassword\"\n              name=\"password\"\n              required\n              #password=\"ngModel\">\n            <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">Please enter your Password</span>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input\n              type=\"text\"\n              id=\"email\"\n              name=\"email\"\n              class=\"form-control\"\n              [(ngModel)] = \"tempEmail\"\n              email\n              required\n              #email=\"ngModel\">\n            <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">Please enter your email</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"jmbg\">JMBG</label>\n            <input\n              type=\"text\"\n              id=\"jmbg\"\n              class=\"form-control\"\n              [(ngModel)] = \"tempJMBG\"\n              name=\"jmbg\"\n              required\n              #jmbg=\"ngModel\">\n            <span class=\"help-block\" *ngIf=\"!jmbg.valid && jmbg.touched\">Please enter your JMBG</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"mpNumber\">Mobilephone number</label>\n            <input\n              type=\"text\"\n              id=\"mpNumber\"\n              class=\"form-control\"\n              [(ngModel)] = \"tempMobilePhoneNumber\"\n              name=\"mpNumber\"\n              required\n              #mpNumber=\"ngModel\">\n            <span class=\"help-block\" *ngIf=\"!mpNumber.valid && mpNumber.touched\">Please enter your Mobilephone number</span>\n          </div>\n        </div>\n        <button\n          type=\"submit\"\n          class=\"btn btn-primary\"\n          [disabled]=\"!f.valid\"\n          >Modify</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/modify/modify.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/modify/modify.component.ts ***!
  \****************************************************/
/*! exports provided: ModifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyComponent", function() { return ModifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global */ "./src/app/global.ts");
/* harmony import */ var _modify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modify.service */ "./src/app/profile/modify/modify.service.ts");
/* harmony import */ var _app_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.model */ "./src/app/app.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModifyComponent = /** @class */ (function () {
    function ModifyComponent(myGlobal, modifyService) {
        this.myGlobal = myGlobal;
        this.modifyService = modifyService;
    }
    ModifyComponent.prototype.ngOnInit = function () {
        this.tempFirstname = this.myGlobal.myUser.firstName;
        this.tempLastname = this.myGlobal.myUser.lastname;
        this.tempUsername = this.myGlobal.myUser.username;
        this.tempPassword = this.myGlobal.myUser.password;
        this.tempEmail = this.myGlobal.myUser.email;
        this.tempJMBG = this.myGlobal.myUser.jmbg;
        this.tempMobilePhoneNumber = this.myGlobal.myUser.mobilephoneNumber;
    };
    ModifyComponent.prototype.onModify = function () {
        var _this = this;
        this.modifyService.modifyUser(new _app_model__WEBPACK_IMPORTED_MODULE_3__["User"](this.tempUsername, this.tempPassword, this.tempFirstname, this.tempLastname, this.tempJMBG, this.tempMobilePhoneNumber, this.tempEmail, this.myGlobal.myUser.sex, this.myGlobal.myUser.accessLevel))
            .subscribe(function (response) {
            if (response.modify === 'success') {
                console.log('success on modify!');
                _this.myGlobal.myUser.username = _this.tempUsername;
                _this.myGlobal.myUser.password = _this.tempPassword;
                _this.myGlobal.myUser.mobilephoneNumber = _this.tempMobilePhoneNumber;
                _this.myGlobal.myUser.email = _this.tempEmail;
                _this.myGlobal.myUser.firstName = _this.tempFirstname;
                _this.myGlobal.myUser.lastname = _this.tempLastname;
                _this.myGlobal.myUser.jmbg = _this.tempJMBG;
            }
            else {
                console.log('failed on modify!');
            }
        });
    };
    ModifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modify',
            template: __webpack_require__(/*! ./modify.component.html */ "./src/app/profile/modify/modify.component.html"),
            styles: [__webpack_require__(/*! ./modify.component.css */ "./src/app/profile/modify/modify.component.css")]
        }),
        __metadata("design:paramtypes", [_global__WEBPACK_IMPORTED_MODULE_1__["Globals"], _modify_service__WEBPACK_IMPORTED_MODULE_2__["ModifyService"]])
    ], ModifyComponent);
    return ModifyComponent;
}());



/***/ }),

/***/ "./src/app/profile/modify/modify.service.ts":
/*!**************************************************!*\
  !*** ./src/app/profile/modify/modify.service.ts ***!
  \**************************************************/
/*! exports provided: ModifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyService", function() { return ModifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModifyService = /** @class */ (function () {
    function ModifyService(http) {
        this.http = http;
    }
    ModifyService.prototype.modifyUser = function (user) {
        var head = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        console.log('JSON:' + JSON.stringify(user));
        return this.http.post('http://localhost:51383/api/user/modify', JSON.stringify(user), { headers: head, withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var data = response.json();
            console.log('response modifyUser: ' + data);
            return data;
        }));
    };
    ModifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ModifyService);
    return ModifyService;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-4\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global */ "./src/app/global.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/profile/logout/logout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(myGlobals, logoutService, route) {
        this.myGlobals = myGlobals;
        this.logoutService = logoutService;
        this.route = route;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.logOut = function () {
        var _this = this;
        this.logoutService.logOut()
            .subscribe(function (response) {
            if (response.logout === 'success') {
                _this.route.navigateByUrl('/');
                _this.myGlobals.myUser.logOut();
            }
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_global__WEBPACK_IMPORTED_MODULE_1__["Globals"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_2__["LogoutService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/register/register-service.ts":
/*!******************************************************!*\
  !*** ./src/app/profile/register/register-service.ts ***!
  \******************************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService.prototype.saveUser = function (user) {
        var head = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        console.log('JSON:' + JSON.stringify(user));
        return this.http.post('http://localhost:51383/api/user/register', JSON.stringify(user), { headers: head });
    };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/profile/register/register.component.css":
/*!*********************************************************!*\
  !*** ./src/app/profile/register/register.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched{\n  border: 1px solid red;\n}\n"

/***/ }),

/***/ "./src/app/profile/register/register.component.html":
/*!**********************************************************!*\
  !*** ./src/app/profile/register/register.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"page-header\">Registration</h1>\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n        <div id=\"user-data\">\n          <div class=\"form-group\">\n            <label for=\"firstname\">Firstname</label>\n            <input\n              type=\"text\"\n              id=\"firstname\"\n              class=\"form-control\"\n              ngModel\n              name=\"firstname\"\n              required\n              #firstname=\"ngModel\">\n          </div>\n          <span class=\"help-block\" *ngIf=\"!firstname.valid && firstname.touched\">Please enter your Firstname</span>\n          <div class=\"form-group\">\n            <label for=\"lastname\">Lastname</label>\n            <input\n              type=\"text\"\n              id=\"lastname\"\n              class=\"form-control\"\n              ngModel\n              name=\"lastname\"\n              required\n              #lastname=\"ngModel\"\n            >\n            <span class=\"help-block\" *ngIf=\"!lastname.valid && lastname.touched\">Please enter your Lastname</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input\n              type=\"text\"\n              id=\"username\"\n              class=\"form-control\"\n              ngModel\n              name=\"username\"\n              required\n              #username=\"ngModel\">\n            <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">Please enter your Username</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input\n              type=\"password\"\n              id=\"password\"\n              class=\"form-control\"\n              ngModel\n              name=\"password\"\n              required\n              #password=\"ngModel\">\n            <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">Please enter your Password</span>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input\n              type=\"text\"\n              id=\"email\"\n              name=\"email\"\n              class=\"form-control\"\n              ngModel\n              email\n              required\n              #email=\"ngModel\">\n            <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">Please enter your email</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"jmbg\">JMBG</label>\n            <input\n              type=\"text\"\n              id=\"jmbg\"\n              class=\"form-control\"\n              ngModel\n              name=\"jmbg\"\n              required\n              #jmbg=\"ngModel\">\n            <span class=\"help-block\" *ngIf=\"!jmbg.valid && jmbg.touched\">Please enter your JMBG</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"mpNumber\">Mobilephone number</label>\n            <input\n              type=\"text\"\n              id=\"mpNumber\"\n              class=\"form-control\"\n              ngModel\n              name=\"mpNumber\"\n              required\n              #mpNumber=\"ngModel\">\n            <span class=\"help-block\" *ngIf=\"!mpNumber.valid && mpNumber.touched\">Please enter your Mobilephone number</span>\n          </div>\n          <div class=\"radio\" *ngFor=\"let gender of genders; let i = index\">\n            <label>\n              <input\n                ngModel\n                type=\"radio\"\n                name=\"gender\"\n                [value]=\"gender\"\n                (change)=\"onSelectGender(gender)\"\n                required\n              >\n              {{gender}}\n            </label>\n          </div>\n        </div>\n        <button\n          type=\"submit\"\n          class=\"btn btn-primary\"\n          [disabled]=\"!f.valid\">Register</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/register/register.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile/register/register.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-service */ "./src/app/profile/register/register-service.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global */ "./src/app/global.ts");
/* harmony import */ var _app_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.model */ "./src/app/app.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(myUserService, myUser) {
        this.myUserService = myUserService;
        this.myUser = myUser;
        this.title = 'Register';
        this.genders = ['male', 'female'];
        this.selectedGender = '';
    }
    RegisterComponent.prototype.onSelectGender = function (selectedGen) {
        this.selectedGender = selectedGen;
    };
    RegisterComponent.prototype.onSubmit = function () {
        this.myUserService.saveUser(new _app_model__WEBPACK_IMPORTED_MODULE_4__["User"](this.usernameInput.value, this.passwordInput.value, this.firstnameInput.value, this.lastnamenameInput.value, this.jmbgInput.value, this.mobiletelephoneInput.value, this.emailInput.value, this.selectedGender, _app_model__WEBPACK_IMPORTED_MODULE_4__["AccessLevel"].user))
            .subscribe(function (response) { return console.log(response); });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], RegisterComponent.prototype, "singupForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('firstname'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"])
    ], RegisterComponent.prototype, "firstnameInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('lastname'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"])
    ], RegisterComponent.prototype, "lastnamenameInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('username'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"])
    ], RegisterComponent.prototype, "usernameInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('password'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"])
    ], RegisterComponent.prototype, "passwordInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('jmbg'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"])
    ], RegisterComponent.prototype, "jmbgInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('email'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"])
    ], RegisterComponent.prototype, "emailInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mpNumber'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"])
    ], RegisterComponent.prototype, "mobiletelephoneInput", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/profile/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/profile/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"], _global__WEBPACK_IMPORTED_MODULE_3__["Globals"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/shared/dropdown.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/dropdown.directive.ts ***!
  \**********************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = /** @class */ (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.open'),
        __metadata("design:type", Object)
    ], DropdownDirective.prototype, "isOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "toggleOpen", null);
    DropdownDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDropdown]'
        })
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\FAX_MY\WP\WPprojekat-master\proj\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map