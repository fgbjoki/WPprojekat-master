using Common;
using Common.Parameters;
using Newtonsoft.Json.Linq;
using RepositoryProject;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.Cryptography;
using System.Text;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Script.Serialization;

namespace MyWebAPI.Controllers
{
    public class UserController : ApiController
    {
        /// <summary>
        /// Key: SHA cookie
        /// Value: User info
        /// </summary>
        public static Dictionary<string, User> loggedIn = new Dictionary<string, User>();

        public string GenerateToken(string username, string password)
        {
            StringBuilder Sb = new StringBuilder();

            using (SHA256 hash = SHA256Managed.Create())
            {
                Encoding enc = Encoding.UTF8;
                Byte[] result = hash.ComputeHash(enc.GetBytes(string.Concat(username, password)));

                foreach (Byte b in result)
                    Sb.Append(b.ToString("x2"));
            }
            return Sb.ToString();
        }

        // GET: api/User
        [AllowAnonymous]
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [AllowAnonymous]
        // GET: api/User/5
        public string Get(int id)
        {
            return "value";
        }


        [AllowAnonymous]
        [Route("api/user/register")]
        [HttpPost]
        public HttpResponseMessage Register([FromBody]User user)
        {

            if (UserRepository.Instance.CheckIfExists(user.Username))
            {
                return new HttpResponseMessage() { Content = new StringContent("{\"registration\":\"failed\", \"message\":\"Username is taken\"}", System.Text.Encoding.UTF8, "application/json") };
            }
            else
            {
                UserRepository.Instance.RegisterNew(user);
                return new HttpResponseMessage() { Content = new StringContent("{\"registration\":\"success\", \"message\":\"Successfuly registered\"}", System.Text.Encoding.UTF8, "application/json") };
            }
        }

        [AllowAnonymous]
        [Route("api/user/login")]
        [HttpPost]
        public HttpResponseMessage Login([FromBody]LoginParameters param)
        {
            if(param == null)
            {
                var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"login\":\"failed\", \"message\":\"Bad format\"}", System.Text.Encoding.UTF8, "application/json") };
                var setCookie = new CookieHeaderValue("myCookie", "") { Expires = DateTimeOffset.Now.AddDays(-1) };
                responseMessage.Headers.AddCookies(new CookieHeaderValue[] { setCookie });
                return responseMessage;
            }
            if (loggedIn.ContainsKey(GenerateToken(param.Username, param.Password)))
            {
                var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"login\":\"failed\", \"message\":\"User already loggedin\"}", System.Text.Encoding.UTF8, "application/json") };
                var setCookie = new CookieHeaderValue("myCookie", "") { Expires = DateTimeOffset.Now.AddDays(-1) };
                responseMessage.Headers.AddCookies(new CookieHeaderValue[] { setCookie });
                return responseMessage;
            }
            else if (!UserRepository.Instance.CheckIfExists(param.Username))
            {
                var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"login\":\"failed\", \"message\":\"Username does not exist\"}", System.Text.Encoding.UTF8, "application/json") };
                var setCookie = new CookieHeaderValue("myCookie", "") { Expires = DateTimeOffset.Now.AddDays(-1) };
                responseMessage.Headers.AddCookies(new CookieHeaderValue[] { setCookie });
                return responseMessage;
            }
            else
            {
                var json = new JavaScriptSerializer().Serialize(UserRepository.Instance.GetUserByUsername(param.Username));

                var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"login\":\"success\", \"message\":\"Successfuly logged in\", \"user\":"+json+"}", System.Text.Encoding.UTF8, "application/json") };
                var setCookie = new CookieHeaderValue("myCookie", GenerateToken(param.Username, param.Password)) { Expires = DateTimeOffset.Now.AddDays(1) };
                setCookie.Domain = Request.RequestUri.Host;
                setCookie.Path = "/";

                loggedIn.Add(GenerateToken(param.Username, param.Password), UserRepository.Instance.GetUserByUsername(param.Username));
                responseMessage.Headers.AddCookies(new CookieHeaderValue[] { setCookie });
                return responseMessage;
            }
        }


        [AllowAnonymous]
        [Route("api/user/logout")]
        [HttpPost]
        public HttpResponseMessage Logout()
        {
            CookieHeaderValue cookie;
            if ((cookie = Request.Headers.GetCookies("myCookie").FirstOrDefault()) != null)
            {
                string values = cookie.Cookies[0].Value;
                if (loggedIn.ContainsKey(values))
                {
                    loggedIn.Remove(values);
                    var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"logout\":\"success\", \"message\":\"Successfuly logged out\"}", System.Text.Encoding.UTF8, "application/json") };
                    var setCookie = new CookieHeaderValue("myCookie", "") { Expires = DateTimeOffset.Now.AddDays(-1) };
                    responseMessage.Headers.AddCookies(new CookieHeaderValue[] { setCookie });
                    return responseMessage;
                }
                else
                {
                    // ako korisnik nije ulogovan
                    var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"logout\":\"failed\", \"message\":\"Something went wrong\"}", System.Text.Encoding.UTF8, "application/json") };
                    var setCookie = new CookieHeaderValue("myCookie", "") { Expires = DateTimeOffset.Now.AddDays(-1) };
                    responseMessage.Headers.AddCookies(new CookieHeaderValue[] { setCookie });
                    return responseMessage;
                }
            }
            else
            {
                // nije uopste logovan
                var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"logout\":\"failed\", \"message\":\"Something went wrong\"}", System.Text.Encoding.UTF8, "application/json") };
                var setCookie = new CookieHeaderValue("myCookie", "") { Expires = DateTimeOffset.Now.AddDays(-1) };
                responseMessage.Headers.AddCookies(new CookieHeaderValue[] { setCookie });
                return responseMessage;
            }
        }

        [AllowAnonymous]
        [Route("api/user/modify")]
        [HttpPost]
        public HttpResponseMessage Modify([FromBody]User user)
        {
            CookieHeaderValue cookie = Request.Headers.GetCookies("myCookie").FirstOrDefault();
            if ( cookie != null)
            {
                string values = cookie.Cookies[0].Value;
                User tempUser = null;
                if (loggedIn.TryGetValue(values, out tempUser))
                {
                    loggedIn.Remove(GenerateToken(tempUser.Username, tempUser.Password));
                    int id = UserRepository.Instance.GetIDByUsername(tempUser.Username);
                    UserRepository.Instance.ModifyUser(id, user.Firstname, user.Lastname,
                        user.MobilePhoneNumber, user.JMBG, user.Email, user.Username, user.Password);

                    var setCookie = new CookieHeaderValue("myCookie", GenerateToken(user.Username, user.Password)) { Expires = DateTimeOffset.Now.AddDays(1) };
                    setCookie.Domain = Request.RequestUri.Host;
                    setCookie.Path = "/";
                    
                    loggedIn.Add(GenerateToken(user.Username, user.Password), UserRepository.Instance.GetUserByUsername(user.Username));

                    var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"modify\":\"success\"}", System.Text.Encoding.UTF8, "application/json") };
                    responseMessage.Headers.AddCookies(new CookieHeaderValue[] { setCookie });
                    return responseMessage;
                }
                else
                {
                    var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"modify\":\"failed\"}", System.Text.Encoding.UTF8, "application/json") };
                    return responseMessage;
                }
            }
            else
            {
                var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"modify\":\"failed\"}", System.Text.Encoding.UTF8, "application/json") };
                return responseMessage;
            }
        }

        [AllowAnonymous]
        [Route("api/user/registerdriver")]
        [HttpPost]
        public HttpResponseMessage RegisterDriver([FromBody]DriverRegistrationParameters driverParams)
        {

            CookieHeaderValue cookie = Request.Headers.GetCookies("myCookie").FirstOrDefault();
            HttpResponseMessage responseMessage = null;
            if (cookie != null)
            {
                string values = cookie.Cookies[0].Value;
                User tempUser = null;
                if (loggedIn.TryGetValue(values, out tempUser))
                {
                    if(UserRepository.Instance.CheckIfExists(driverParams.user.Username))
                    {
                        responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"add\":\"failed\", \"message\":\"User with given username already exists!\"}", System.Text.Encoding.UTF8, "application/json") };
                        return responseMessage;
                    }
                    else
                    {
                        if(UserRepository.Instance.CheckIfTaxiIDExists(driverParams.vehicle.TaxiID))
                        {
                            responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"add\":\"failed\", \"message\":\"Taxi ID already exists!\"}", System.Text.Encoding.UTF8, "application/json") };
                            return responseMessage;
                        }
                        else
                        {
                            Driver tempDriver = new Driver(new Vehicle(driverParams.vehicle.CarAge, driverParams.vehicle.RegistrationPlate, driverParams.vehicle.TaxiID, carType: driverParams.vehicle.VehicleType))
                            {
                                Firstname = driverParams.user.Firstname,
                                Lastname = driverParams.user.Lastname,
                                Username = driverParams.user.Username,
                                Password = driverParams.user.Password,
                                AccessLevel = AccessLevel.driver,
                                Sex = driverParams.user.Sex,
                                Email = driverParams.user.Email,
                                JMBG = driverParams.user.JMBG,
                                MobilePhoneNumber = driverParams.user.MobilePhoneNumber
                            };
                            UserRepository.Instance.RegisterNew(tempDriver);
                            responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"add\":\"success\", \"message\":\"Successfully added new driver!\"}", System.Text.Encoding.UTF8, "application/json") };

                        }
                    }
                }
                else
                {
                    responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"add\":\"failed\", \"message\":\"Not logged in\"}", System.Text.Encoding.UTF8, "application/json") };
                }
            }
            else
                responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"add\":\"failed\", \"message\":\"Not logged in\"}", System.Text.Encoding.UTF8, "application/json") };

            return responseMessage;
        }

        [AllowAnonymous]
        [Route("api/user/driverlocation")]
        [HttpGet]
        public HttpResponseMessage DriverLocation()
        {
            CookieHeaderValue cookie;
            if ((cookie = Request.Headers.GetCookies("myCookie").FirstOrDefault()) != null)
            {
                string values = cookie.Cookies[0].Value;
                if (loggedIn.ContainsKey(values))
                {
                    User foundUser = null;
                    loggedIn.TryGetValue(values, out foundUser);

                    Location tempLocation = UserRepository.Instance.GetDriverLocationByID(foundUser.ID);

                    if(tempLocation == null)
                    {
                        var responseMess = new HttpResponseMessage() { Content = new StringContent("{\"mylocation\":\"failed\", \"message\":\"No location\"}", System.Text.Encoding.UTF8, "application/json") };
                        return responseMess;
                    }

                    var json = new JavaScriptSerializer().Serialize(tempLocation);
                    var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"mylocation\":\"success\", \"location\":"+ json +"}", System.Text.Encoding.UTF8, "application/json") };
                    return responseMessage;
                }
                else
                {
                    // ako korisnik nije ulogovan
                    var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"mylocation\":\"failed\", \"message\":\"Not logged in\"}", System.Text.Encoding.UTF8, "application/json") };
                    var setCookie = new CookieHeaderValue("myCookie", "") { Expires = DateTimeOffset.Now.AddDays(-1) };
                    responseMessage.Headers.AddCookies(new CookieHeaderValue[] { setCookie });
                    return responseMessage;
                }
            }
            else
            {
                // isetkao cookie = ga nema = nije ulgovan
                var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"mylocation\":\"failed\", \"message\":\"Not logged in\"}", System.Text.Encoding.UTF8, "application/json") };
                var setCookie = new CookieHeaderValue("myCookie", "") { Expires = DateTimeOffset.Now.AddDays(-1) };
                responseMessage.Headers.AddCookies(new CookieHeaderValue[] { setCookie });
                return responseMessage;
            }
        }

        [AllowAnonymous]
        [Route("api/user/driverlocation")]
        [HttpPost]
        public HttpResponseMessage DriverLocation([FromBody]Location newLocation)
        {
            CookieHeaderValue cookie;
            if ((cookie = Request.Headers.GetCookies("myCookie").FirstOrDefault()) != null)
            {
                string values = cookie.Cookies[0].Value;
                if (loggedIn.ContainsKey(values))
                {
                    User foundUser = null;
                    loggedIn.TryGetValue(values, out foundUser);

                    if (UserRepository.Instance.ChangeDriverLocation(foundUser.ID, newLocation))
                    {
                        var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"mylocation\":\"success\"}", System.Text.Encoding.UTF8, "application/json") };
                        return responseMessage;
                    }
                    else
                    {
                        var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"mylocation\":\"failed\"}", System.Text.Encoding.UTF8, "application/json") };
                        return responseMessage;
                    }
                }
                else
                {
                    // ako korisnik nije ulogovan
                    var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"mylocation\":\"failed\", \"message\":\"Not logged in\"}", System.Text.Encoding.UTF8, "application/json") };
                    var setCookie = new CookieHeaderValue("myCookie", "") { Expires = DateTimeOffset.Now.AddDays(-1) };
                    responseMessage.Headers.AddCookies(new CookieHeaderValue[] { setCookie });
                    return responseMessage;
                }
            }
            else
            {
                // isetkao cookie = ga nema = nije ulgovan
                var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"mylocation\":\"failed\", \"message\":\"Not logged in\"}", System.Text.Encoding.UTF8, "application/json") };
                var setCookie = new CookieHeaderValue("myCookie", "") { Expires = DateTimeOffset.Now.AddDays(-1) };
                responseMessage.Headers.AddCookies(new CookieHeaderValue[] { setCookie });
                return responseMessage;
            }
        }

        [AllowAnonymous]
        [Route("api/user/drivers")]
        [HttpGet]
        public HttpResponseMessage GetDrivers()
        {
            CookieHeaderValue cookie;
            if ((cookie = Request.Headers.GetCookies("myCookie").FirstOrDefault()) != null)
            {
                string values = cookie.Cookies[0].Value;
                if (loggedIn.ContainsKey(values))
                {
                    User foundUser = null;
                    loggedIn.TryGetValue(values, out foundUser);

                    List<User> filterDrivers = UserRepository.Instance.GetAllUsers();
                    if(filterDrivers != null)
                    {
                        filterDrivers.RemoveAll(user => user.GetType() != typeof(Driver) || ((Driver)user).CurrentRideID != -1);
                        List<Driver> driverList = new List<Driver>();
                        foreach (var item in filterDrivers)
                        {
                            driverList.Add((Driver)item);
                        }
                        var json = new JavaScriptSerializer().Serialize(driverList);
                        var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"get\":\"success\", \"drivers\":"+ json +"}", System.Text.Encoding.UTF8, "application/json") };
                        return responseMessage;
                    }
                    else
                    {
                        var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"get\":\"failed\", \"message\":\"No available drivers\"}", System.Text.Encoding.UTF8, "application/json") };
                        return responseMessage;
                    }
                }
                else
                {
                    // ako korisnik nije ulogovan
                    var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"get\":\"failed\", \"message\":\"Not logged in\"}", System.Text.Encoding.UTF8, "application/json") };
                    var setCookie = new CookieHeaderValue("myCookie", "") { Expires = DateTimeOffset.Now.AddDays(-1) };
                    responseMessage.Headers.AddCookies(new CookieHeaderValue[] { setCookie });
                    return responseMessage;
                }
            }
            else
            {
                // isetkao cookie = ga nema = nije ulgovan
                var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"get\":\"failed\", \"message\":\"Not logged in\"}", System.Text.Encoding.UTF8, "application/json") };
                var setCookie = new CookieHeaderValue("myCookie", "") { Expires = DateTimeOffset.Now.AddDays(-1) };
                responseMessage.Headers.AddCookies(new CookieHeaderValue[] { setCookie });
                return responseMessage;
            }
        }
    }
}
