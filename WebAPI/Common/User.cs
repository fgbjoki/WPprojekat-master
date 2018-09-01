using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public class User
    {
        private static int idCounter = 0;

        public String Username { get; set; }
        public String Password { get; set; }
        public String Firstname { get; set; }
        public String Lastname { get; set; }

        public String JMBG { get; set; }
        public String MobilePhoneNumber { get; set; }
        public String Email { get; set; }
        public Sex Sex { get; set; }
        public AccessLevel AccessLevel { get; set; }
        public int ID { get; }
        public User()
        {
            ID = ++idCounter;
        }
        public User(string username, string password, string firstname, string lastname, string jmbg, string mobilePhoneNumberm, string email, Sex sex, AccessLevel accessLevel, int id = -1)
        {
            if (id == -1)
                ID = ++idCounter;
            else
                ID = id;

            Username = username;
            Password = password;
            Firstname = firstname;
            Lastname = lastname;
            JMBG = JMBG;
            MobilePhoneNumber = mobilePhoneNumberm;
            Email = email;
            Sex = sex;
            AccessLevel = accessLevel;
        }

        public override string ToString()
        {
            return $"{Username},{Password},{Firstname},{Lastname},{JMBG},{MobilePhoneNumber},{Email},{Sex},{AccessLevel},{ID}";
        }
    }
}
