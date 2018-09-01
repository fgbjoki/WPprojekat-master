using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public class Comment
    {
        private int grade;
        private string description;
        public string Description
        {
            get => description;
            set
            {
                description = value ;
                CreateDate = DateTime.Now;
            }
        }
        public DateTime CreateDate { get; set; }
        /// <summary>
        /// onaj ko je objavio komentar
        /// </summary>
        public int ClientID { get; set; }
        public int RideID { get; set; }
        public int DriverID { get; set; }
        public int Grade
        {
            get => grade;
            set
            {
                if (value >= 0 || value <= 5)
                    grade = value;
            }
        }
        public Comment(string description = "", int clientID = 0, int rideID = 0, int driverID = 0, int grade = 0)
        {
            Description = description;
            ClientID = clientID;
            RideID = rideID;
            DriverID = driverID;
            Grade = grade;
        }

        public Comment()
        {
            Description = "";
            CreateDate = DateTime.Now;
        }
    }
}
