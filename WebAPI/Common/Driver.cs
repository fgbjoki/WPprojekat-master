using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public class Driver : User
    {
        public Driver(Vehicle vehicle) : base()
        {
            Vehicle = vehicle;
            Vehicle.DriverID = this.ID;
            Location = new Location(streetName: "Kraljevica Marka", streetNumber: 41, lat: 45.262800, lng: 19.835150, cityName: "Novi Sad", cityZipcode: "21000");
        }

        public Driver() : base()
        {
            Location = new Location(streetName: "Kraljevica Marka", streetNumber: 41, lat: 45.262800, lng: 19.835150, cityName: "Novi Sad", cityZipcode: "21000");
        }

        public Vehicle Vehicle { get; set; }
        public Location Location { get; set; }
    }
}
