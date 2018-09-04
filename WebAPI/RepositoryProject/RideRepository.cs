using Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositoryProject
{
    public class RideRepository
    {
        private static RideRepository instance;
        private static object lockObject = new object();

        private List<Rides> rides = new List<Rides>() { new Rides(new Location(streetName:"Kraljevica Marka", streetNumber: 41, lat: 45.262800, lng: 19.835150, cityName: "Novi Sad", cityZipcode: "21000")) { UserID=2, CarType=VehicleType.car, Price = 100, Status = RideStatus.created} };

        public static RideRepository Instance
        {
            get
            {
                if(instance == null)
                {
                    lock(lockObject)
                    {
                        if (instance == null)
                            instance = new RideRepository();
                    }
                }
                return instance;
            }
        }

        public Rides AddRide(Location location, VehicleType type = VehicleType.not_defined, int userID = -1, String adminName = "", int driverID = -1, RideStatus status = RideStatus.created)
        {
            Rides newRide = new Rides(location) { AdminName = adminName, UserID = userID, DriverID = driverID, CarType = type, Status = status};
            rides.Add(newRide);
            if (driverID != -1)
            {
                if (((Driver)UserRepository.Instance.GetUserByID(driverID)).CurrentRideID == -1)
                {
                    ((Driver)UserRepository.Instance.GetUserByID(driverID)).CurrentRideID = newRide.RideID;
                    return newRide;
                }
                else
                    return null;
            }

            return newRide;
        }

        public bool AcceptRide(int rideID, int driverID)
        {
            if (rides.Any(ride => ride.RideID == rideID))
            {
                var tempRide = rides.First(ride => ride.RideID == rideID);
                if (tempRide.DriverID > 0)
                    return false;
                else
                {
                    tempRide.DriverID = driverID;
                    tempRide.Status = RideStatus.accepted;

                    return true;
                }
            }
            else
                return false;
        }

        public bool FailedRide(int rideID, int driverID)
        {
            if (rides.Any(ride => ride.RideID == rideID))
            {
                var tempRide = rides.First(ride => ride.RideID == rideID);
                if (driverID == tempRide.DriverID)
                {
                    tempRide.Status = RideStatus.failed;

                    return true;
                }
                else
                    return false;
            }
            else
                return false;
        }

        public bool SucceededRide(int rideID, int driverID)
        {
            if (rides.Any(ride => ride.RideID == rideID))
            {
                var tempRide = rides.First(ride => ride.RideID == rideID);
                if (driverID == tempRide.DriverID)
                {
                    tempRide.Status = RideStatus.succeeded;

                    return true;
                }
                else
                    return false;
            }
            else
                return false;
        }

        public Rides FindRideById(int id)
        {
            if (rides.Exists(x => x.RideID == id))
                return rides.First(x => x.RideID == id);

            return null;
        }

        public List<Rides> FindRidesByUserId(int id)
        {
            if (rides.Exists(x => x.UserID == id))
                return rides.FindAll(x => x.UserID == id);

            return null;
        }

        public List<Rides> GetAllRides()
        {
            return rides;
        }

        public bool CancelRide(int rideID)
        {
            if (rides.Any(ride => ride.RideID == rideID))
            {
                rides.First(ride => ride.RideID == rideID).Status = RideStatus.calledOff;
                return true;
            }
            else
                return false;
        }

        public bool AddCommentToRide(int rideID, Comment comment)
        {
            if (rides.Any(ride => ride.RideID == rideID))
            {
                Rides ride = rides.First(ride1 => ride1.RideID == rideID);
                ride.Comment.CreateDate = DateTime.Now;
                ride.Comment.Description = comment.Description;
                ride.Comment.Grade = comment.Grade;
                return true;
            }
            else
                return false;
        }

        public bool ChangeAddress(int rideID, Location newLocation)
        {
            if (rides.Any(ride => ride.RideID == rideID))
            {
                rides.First(ride => ride.RideID == rideID).StartLocation = new Location(newLocation.Lat, newLocation.Lng, newLocation.StreetNumber, newLocation.StreetName, newLocation.CityName, newLocation.CityZipcode);
                return true;
            }
            else
                return false;
        }
    }
}
