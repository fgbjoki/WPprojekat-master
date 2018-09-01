using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public class Location
    {
        public double Lat { get; set; }
        public double Lng { get; set; }
        public int StreetNumber { get; set; }
        public string StreetName { get; set; }
        public string CityName { get; set; }
        public String CityZipcode { get; set; }

        public Location(double lat = 45.267136, double lng = 19.833549, int streetNumber = -1, string streetName = "", string cityName = "", string cityZipcode = "")
        {
            Lat = lat;
            Lng = lng;
            StreetNumber = streetNumber;
            StreetName = streetName;
            CityName = cityName;
            CityZipcode = cityZipcode;
        }
    }
}
