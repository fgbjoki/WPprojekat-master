using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public class Vehicle
    {
        public int DriverID { get; set; }
        public int CarAge { get; set; }
        public String RegistrationPlate { get; set; }
        public string TaxiID { get; set; }
        public VehicleType VehicleType { get; set; }

        public Vehicle(int carAge, string registrationPlate, string taxiID, int driverID = 0, VehicleType carType = VehicleType.car)
        {
            DriverID = driverID;
            CarAge = carAge;
            RegistrationPlate = registrationPlate;
            TaxiID = taxiID;
            VehicleType = carType;
        }
    }
}
