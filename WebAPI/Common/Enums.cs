using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public enum Sex : int
    {
        male = 0,
        female
    }

    public enum AccessLevel
    {
        guest = 0,
        user,
        driver,
        admin
    }

    public enum VehicleType
    {
        not_defined = 0,
        car,
        van
    }

    public enum RideStatus
    {
        created = 0,
        formed = 1,
        processed = 2,
        accepted = 3,
        calledOff = 4,
        failed = 5,
        succeeded = 6
    }
}
