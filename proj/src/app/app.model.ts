export enum AccessLevel {
  guest = 0,
  user = 1,
  driver = 2,
  admin = 3
}


export class User {
  public username: string;
  public password: string;
  public firstName: string;
  public lastname: string;
  public jmbg: string;
  public mobilephoneNumber: string;
  public email: string;
  public sex: string;
  public accessLevel: AccessLevel;

  constructor(username: string, password: string, firstname: string,
              lastname: string, jmbg: string, mobilphoneNumber: string,
              email: string, sex: string, accessLevel: AccessLevel) {
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

  logIn(username: string, password: string, firstname: string,
              lastname: string, jmbg: string, mobilphoneNumber: string,
              email: string, accessLevel: AccessLevel) {
    this.username = username;
    this.password = password;
    this.firstName = firstname;
    this.lastname = lastname;
    this.jmbg = jmbg;
    this.mobilephoneNumber = mobilphoneNumber;
    this.email = email;
    this.accessLevel = accessLevel;
    console.log('logged in, accessLevel: ' + accessLevel);
  }

  logOut() {
    this.username = '';
    this.password = '';
    this.firstName = '';
    this.lastname = '';
    this.jmbg = '';
    this.mobilephoneNumber = '';
    this.email = '';
    this.accessLevel = AccessLevel.guest;
  }
}
