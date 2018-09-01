using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public class Rides
    {
        private static int idCounter = 0;
        private int driverID;
        private int userID;
        public int RideID { get; }
        public DateTime TimeMade { get; set; }
        public Location StartLocation { get; set; }
        public Location EndLocation { get; set; }
        public VehicleType CarType { get; set; }
        /// <summary>
        /// ako je musterija kreirala voznju
        /// </summary>
        public int UserID
        {
            get => userID;
            set
            {
                userID = value;
                Comment.ClientID = value;
            }
        }
        /// <summary>
        /// ako je dispecer kreirao voznju
        /// </summary>
        public String AdminName { get; set; }
        public int DriverID
        {
            get => driverID;
            set
            {
                driverID = value;
                Comment.DriverID = value;
            }
        }
        public double Price { get; set; }
        public Comment Comment { get; set; }
        public RideStatus Status { get; set; }

        public Rides(Location startLocation)
        {
            RideID = ++idCounter;
            Comment = new Comment() { RideID = RideID };
            TimeMade = DateTime.Now;
            StartLocation = startLocation;
            DriverID = 0;
        }


    }
}
