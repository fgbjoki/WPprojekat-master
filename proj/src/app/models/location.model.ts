
export class LocationModel {
  lat: number;
  lng: number;
  streetNumber: number;
  streetName: string;
  cityName: string;
  cityZipcode: string;

  constructor(lat: number, lng: number, streetNumber: number, streetName: string, cityName: string, cityZipcode: string) {
    this.lat = lat;
    this.lng = lng;
    this.streetName = streetName;
    this.streetNumber = streetNumber;
    this.cityName = cityName;
    this.cityZipcode = cityZipcode;
  }
}
