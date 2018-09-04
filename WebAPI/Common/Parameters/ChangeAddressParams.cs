using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Parameters
{
    public class ChangeAddressParams
    {
        public int RideID { get; set; }
        public Location NewLocation { get; set; }
    }
}
