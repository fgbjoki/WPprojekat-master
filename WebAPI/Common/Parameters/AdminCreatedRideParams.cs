﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Parameters
{
    public class AdminCreatedRideParams : UserCreatedRideParams
    {
        public int DriverID { get; set; }
    }
}
