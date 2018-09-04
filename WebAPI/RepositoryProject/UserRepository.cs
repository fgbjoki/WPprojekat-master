using Common;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositoryProject
{
    public class UserRepository
    {
        private static UserRepository instance;
        private static object lockObject = new object();

        private List<User> users;

        public UserRepository()
        {
            users = InitUsersFromFile();
            users.Add(
                new User(){ AccessLevel= AccessLevel.user, Email="jovanov33@gmail.com", Firstname="Aleksandar",
                 Lastname="Jovanov", JMBG="1234567890123", MobilePhoneNumber="0123123123",
                 Password = "123", Sex = Sex.male, Username = "jokicar"});
            users.Add(
                new Driver()
                {
                    AccessLevel = AccessLevel.driver,
                    Email = "smora@gmail.com",
                    Firstname = "Pera",
                    Lastname = "Peric",
                    JMBG = "3333333333",
                    MobilePhoneNumber = "3123213",
                    Password = "123",
                    Sex = Sex.male,
                    Username = "pera"
                });
            ((Driver)users.First(user => user.Username == "pera")).Vehicle = new Vehicle(1999, "NS123", "T1", users.First(user => user.Username == "pera").ID, VehicleType.car);
        }

        private List<User> InitUsersFromFile()
        {
            if(!File.Exists(@"F:\FAX_MY\WP\WPprojekat-master\WebAPI\admins.txt"))
            {
                User tempAdmin = new User()
                {
                    AccessLevel = AccessLevel.admin,
                    Email = "admin123@gmail.com",
                    Firstname = "Admin",
                    Lastname = "Adminovski",
                    JMBG = "1234567890123",
                    MobilePhoneNumber = "0123123123",
                    Password = "admin",
                    Sex = Sex.male,
                    Username = "admin"
                };

                File.WriteAllLines(@"F:\FAX_MY\WP\WPprojekat-master\WebAPI\admins.txt", new string[] { tempAdmin.ToString() });

                return new List<User>() { tempAdmin };
            }
            else
            {
                List<string> lines = File.ReadLines(@"F:\FAX_MY\WP\WPprojekat-master\WebAPI\admins.txt").ToList();
                List<User> admins = new List<User>();
                int i = -1;
                foreach (var line in lines)
                {
                    string[] item = line.Split(',');
                    admins.Add(new User(item[0], item[1], item[2], item[3], item[4], item[5], item[5],
                       item[6].Equals("male") ? Sex.male : Sex.female, AccessLevel.admin));
                    switch (item[7])
                    {
                        case "user":
                            admins[i].AccessLevel = AccessLevel.user;break;
                        case "driver":
                            admins[i].AccessLevel = AccessLevel.driver;break;
                        case "admin":
                            admins[i].AccessLevel = AccessLevel.admin;break;
                    }
                }
                return admins;
            }
        }

        public static UserRepository Instance
        {
            get
            {
                if(instance == null)
                {
                    lock(lockObject)
                    {
                        if (instance == null)
                            instance = new UserRepository();
                    }
                }
                return instance;
            }
        }

        public List<User> GetAllUsers()
        {
            if (users.Count > 0)
            {
                return users.ToList();
            }
            else
                return null;
        }

        public bool CheckIfExists(string username)
        {
            return users.Any(user => user.Username.Equals(username));
        }

        public bool CheckIfTaxiIDExists(string taxiID)
        {
            foreach (var driver in users)
            {
                if (driver.GetType() != typeof(Driver))
                    continue;

                if (((Driver)driver).Vehicle.TaxiID.Equals(taxiID))
                    return true;
            }

            return false;
        }

        public bool CheckIfValidParams(string username, string password)
        {
            User foundUser = null;
            if( (foundUser = users.First(x => x.Username.Equals(username))) != null)
            {
                if (foundUser.Password.Equals(password))
                    return true;
                else
                    return false;
            }
            else
                return false;
        }

        public int GetIDByUsername(string username)
        {
            if(users.Exists(x => x.Username.Equals(username)))
            {
                return users.First(x => x.Username.Equals(username)).ID;
            }

            return -1;
        }

        public User GetUserByID(int id)
        {
            User foundUser = null;
            if ((foundUser = users.First(x => x.ID == id)) != null)
                return foundUser;
            else
                return null;
        }

        public User GetUserByUsername(string username)
        {
            User foundUser = null;
            if ((foundUser = users.First(x => x.Username.Equals(username))) != null)
                return foundUser;
            else
                return null;
        }

        public bool ModifyUser(int id, string firstname = "", string lastname = "", string mobilePhone = "", string jmbg = "", string email = "", string username = "", string password = "")
        {
            User foundUser = users.First(x => x.ID == id);
            if ( foundUser != null)
            {
                foundUser.Firstname = firstname.Equals("") ? foundUser.Firstname : firstname;
                foundUser.Lastname = lastname.Equals("") ? foundUser.Lastname : lastname;
                foundUser.Username = username.Equals("") ? foundUser.Username : username;
                foundUser.Password = password.Equals("") ? foundUser.Password : password;
                foundUser.JMBG = jmbg.Equals("") ? foundUser.JMBG : jmbg;
                foundUser.Email = email.Equals("") ? foundUser.Email : email;
                return true;
            }
            else
                return false;
        }

        public bool RegisterNew(User newUser)
        {
            if(users.Find(x => x.Username.Equals(newUser.Username)) == null)
            {
                users.Add(newUser);
                return true;
            }
            return false;
        }

        #region Driver functions
        public Location GetDriverLocationByID(int id)
        {
            if (users.Any(dirver => dirver.ID == id && dirver.GetType() == typeof(Driver)))
            {
                Driver tempDriver = ((Driver)users.First(driver => driver.ID == id));
                return tempDriver.Location;
            }
            else
                return null;
        }

        public bool ChangeDriverLocation(int driverID, Location newDriverLocation)
        {
            Location tempLocation = GetDriverLocationByID(driverID);
            if (tempLocation == null)
                return false;

            tempLocation.CityName = newDriverLocation.CityName;
            tempLocation.CityZipcode = newDriverLocation.CityZipcode;
            tempLocation.Lat = newDriverLocation.Lat;
            tempLocation.Lng = newDriverLocation.Lng;
            tempLocation.StreetName = newDriverLocation.StreetName;
            tempLocation.StreetNumber = newDriverLocation.StreetNumber;

            return true;

        }

        public bool ChangeDriverState(int driverID, int currentRide)
        {
            if (users.Any(driver => driver.ID == driver.ID))
            {
                ((Driver)users.First(driver => driver.ID == driverID)).CurrentRideID = currentRide;
                return true;
            }
            else
                return false;
        }

        #endregion
    }
}
