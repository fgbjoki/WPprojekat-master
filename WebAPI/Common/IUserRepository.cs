using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public interface IUserRepository
    {
        IUserRepository Instance { get; }
        bool CheckIfExists(string username);
        bool CheckIfValidParams(string username, string password);
        bool RegisterNew(User newUser);
        User GetUserByUsername(string username);
        User GetUserByID(int id);
        int GetIDByUsername(string username);
        bool ModifyUser(int id, string firstname = "", string lastname = "", string mobilePhone = "", string jmbg = "", string email = "", string username = "", string password = "");
    }
}
