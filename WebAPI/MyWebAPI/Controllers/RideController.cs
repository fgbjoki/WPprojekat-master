using Common;
using RepositoryProject;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Http;
using System.Web.Script.Serialization;
using System.Threading.Tasks;
using GeocodeSharp.Google;
using Common.Parameters;

namespace MyWebAPI.Controllers
{
    public class RideController : ApiController
    {  

        [AllowAnonymous]
        public HttpResponseMessage Get()
        {
            CookieHeaderValue cookie;
            if ((cookie = Request.Headers.GetCookies("myCookie").FirstOrDefault()) != null)
            {
                string values = cookie.Cookies[0].Value;
                if (UserController.loggedIn.ContainsKey(values))
                {
                    User foundUser = null;
                    UserController.loggedIn.TryGetValue(values, out foundUser);
                    var listOfRides = RideRepository.Instance.GetAllRides().ToList();

                    if(listOfRides != null)
                        if (foundUser.GetType() == typeof(User))
                            listOfRides.RemoveAll(ride => ride.UserID != foundUser.ID);
                    
                        else if (foundUser.GetType() == typeof(Driver))
                        {
                            listOfRides.RemoveAll(ride => ride.DriverID != 0 && ride.DriverID != foundUser.ID);
                            listOfRides.RemoveAll(ride =>
                                ride.CarType != ((Driver)foundUser).Vehicle.VehicleType && ride.CarType != VehicleType.not_defined
                            );
                        }

                    var json = new JavaScriptSerializer().Serialize(listOfRides == null ? new List<Rides>(): listOfRides);
                    var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"get\":\"success\", \"rides\":"+ json +"}", System.Text.Encoding.UTF8, "application/json") };
                    return responseMessage;
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
                // nije uopste logovan
                var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"get\":\"failed\", \"message\":\"Not logged in\"}", System.Text.Encoding.UTF8, "application/json") };
                var setCookie = new CookieHeaderValue("myCookie", "") { Expires = DateTimeOffset.Now.AddDays(-1) };
                responseMessage.Headers.AddCookies(new CookieHeaderValue[] { setCookie });
                return responseMessage;
            }
        }

        [AllowAnonymous]
        [Route("api/ride/usercreated")]
        [HttpPost]
        public HttpResponseMessage UserCreated([FromBody]UserCreatedRideParams userCreatedRide)
        {
            {
                CookieHeaderValue cookie;
                if ((cookie = Request.Headers.GetCookies("myCookie").FirstOrDefault()) != null)
                {
                    string values = cookie.Cookies[0].Value;
                    if (UserController.loggedIn.ContainsKey(values))
                    {
                        User foundUser = null;
                        UserController.loggedIn.TryGetValue(values, out foundUser);
                        RideRepository.Instance.AddRide(userCreatedRide.Location, userCreatedRide.CarType, foundUser.ID);
                        var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"post\":\"success\"}", System.Text.Encoding.UTF8, "application/json") };
                        return responseMessage;
                    }
                    else
                    {
                        // ako korisnik nije ulogovan
                        var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"post\":\"failed\", \"message\":\"Not logged in\"}", System.Text.Encoding.UTF8, "application/json") };
                        var setCookie = new CookieHeaderValue("myCookie", "") { Expires = DateTimeOffset.Now.AddDays(-1) };
                        responseMessage.Headers.AddCookies(new CookieHeaderValue[] { setCookie });
                        return responseMessage;
                    }
                }
                else
                {
                    // ako nema cookie
                    var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"post\":\"failed\", \"message\":\"Not logged in\"}", System.Text.Encoding.UTF8, "application/json") };
                    var setCookie = new CookieHeaderValue("myCookie", "") { Expires = DateTimeOffset.Now.AddDays(-1) };
                    responseMessage.Headers.AddCookies(new CookieHeaderValue[] { setCookie });
                    return responseMessage;
                }
            }
        }

        [AllowAnonymous]
        [Route("api/ride/cancelride")]
        [HttpPost]
        public HttpResponseMessage CancelRide([FromBody]int rideID)
        {
            CookieHeaderValue cookie;
            if ((cookie = Request.Headers.GetCookies("myCookie").FirstOrDefault()) != null)
            {
                string values = cookie.Cookies[0].Value;
                if (UserController.loggedIn.ContainsKey(values))
                {
                    User foundUser = null;
                    UserController.loggedIn.TryGetValue(values, out foundUser);
                    var listOfRides = RideRepository.Instance.FindRidesByUserId(foundUser.ID);

                    RideRepository.Instance.CancelRide(rideID);

                    var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"cancel\":\"success\", \"message\":\"Ride canceled\"}", System.Text.Encoding.UTF8, "application/json") };
                    return responseMessage;
                }
                else
                {
                    // ako korisnik nije ulogovan
                    var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"cancel\":\"failed\", \"message\":\"Not logged in\"}", System.Text.Encoding.UTF8, "application/json") };
                    var setCookie = new CookieHeaderValue("myCookie", "") { Expires = DateTimeOffset.Now.AddDays(-1) };
                    responseMessage.Headers.AddCookies(new CookieHeaderValue[] { setCookie });
                    return responseMessage;
                }
            }
            else
            {
                // isetkao cookie = ga nema = nije ulgovan
                var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"cancel\":\"failed\", \"message\":\"Not logged in\"}", System.Text.Encoding.UTF8, "application/json") };
                var setCookie = new CookieHeaderValue("myCookie", "") { Expires = DateTimeOffset.Now.AddDays(-1) };
                responseMessage.Headers.AddCookies(new CookieHeaderValue[] { setCookie });
                return responseMessage;
            }
        }

        [AllowAnonymous]
        [Route("api/ride/acceptride")]
        [HttpPost]
        public HttpResponseMessage AcceptRide([FromBody]int rideID)
        {
            CookieHeaderValue cookie;
            if ((cookie = Request.Headers.GetCookies("myCookie").FirstOrDefault()) != null)
            {
                string values = cookie.Cookies[0].Value;
                if (UserController.loggedIn.ContainsKey(values))
                {
                    User foundUser = null;
                    UserController.loggedIn.TryGetValue(values, out foundUser);

                    HttpResponseMessage responseMessage = null;

                    if (RideRepository.Instance.AcceptRide(rideID, foundUser.ID))
                        responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"accept\":\"success\", \"message\":\"Ride accepted\"}", System.Text.Encoding.UTF8, "application/json") };
                    else
                        responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"accept\":\"success\", \"message\":\"Ride doesn't exist\"}", System.Text.Encoding.UTF8, "application/json") };

                    return responseMessage;
                }
                else
                {
                    // ako korisnik nije ulogovan
                    var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"accept\":\"failed\", \"message\":\"Not logged in\"}", System.Text.Encoding.UTF8, "application/json") };
                    var setCookie = new CookieHeaderValue("myCookie", "") { Expires = DateTimeOffset.Now.AddDays(-1) };
                    responseMessage.Headers.AddCookies(new CookieHeaderValue[] { setCookie });
                    return responseMessage;
                }
            }
            else
            {
                // isetkao cookie = ga nema = nije ulgovan
                var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"accept\":\"failed\", \"message\":\"Not logged in\"}", System.Text.Encoding.UTF8, "application/json") };
                var setCookie = new CookieHeaderValue("myCookie", "") { Expires = DateTimeOffset.Now.AddDays(-1) };
                responseMessage.Headers.AddCookies(new CookieHeaderValue[] { setCookie });
                return responseMessage;
            }
        }

        [AllowAnonymous]
        [Route("api/ride/failedride")]
        [HttpPost]
        public HttpResponseMessage FailedRide([FromBody]int rideID)
        {
            CookieHeaderValue cookie;
            if ((cookie = Request.Headers.GetCookies("myCookie").FirstOrDefault()) != null)
            {
                string values = cookie.Cookies[0].Value;
                if (UserController.loggedIn.ContainsKey(values))
                {
                    User foundUser = null;
                    UserController.loggedIn.TryGetValue(values, out foundUser);

                    HttpResponseMessage responseMessage = null;

                    if (RideRepository.Instance.FailedRide(rideID, foundUser.ID))
                        responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"failed\":\"success\", \"message\":\"Ride failed\"}", System.Text.Encoding.UTF8, "application/json") };
                    else
                        responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"failed\":\"success\", \"message\":\"Ride doesn't exist\"}", System.Text.Encoding.UTF8, "application/json") };

                    return responseMessage;
                }
                else
                {
                    // ako korisnik nije ulogovan
                    var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"failed\":\"failed\", \"message\":\"Not logged in\"}", System.Text.Encoding.UTF8, "application/json") };
                    var setCookie = new CookieHeaderValue("myCookie", "") { Expires = DateTimeOffset.Now.AddDays(-1) };
                    responseMessage.Headers.AddCookies(new CookieHeaderValue[] { setCookie });
                    return responseMessage;
                }
            }
            else
            {
                // isetkao cookie = ga nema = nije ulgovan
                var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"failed\":\"failed\", \"message\":\"Not logged in\"}", System.Text.Encoding.UTF8, "application/json") };
                var setCookie = new CookieHeaderValue("myCookie", "") { Expires = DateTimeOffset.Now.AddDays(-1) };
                responseMessage.Headers.AddCookies(new CookieHeaderValue[] { setCookie });
                return responseMessage;
            }
        }

        [AllowAnonymous]
        [Route("api/ride/successride")]
        [HttpPost]
        public HttpResponseMessage SuccessRide([FromBody]int rideID)
        {
            CookieHeaderValue cookie;
            if ((cookie = Request.Headers.GetCookies("myCookie").FirstOrDefault()) != null)
            {
                string values = cookie.Cookies[0].Value;
                if (UserController.loggedIn.ContainsKey(values))
                {
                    User foundUser = null;
                    UserController.loggedIn.TryGetValue(values, out foundUser);

                    HttpResponseMessage responseMessage = null;

                    if (RideRepository.Instance.SucceededRide(rideID, foundUser.ID))
                        responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"succeeded\":\"success\", \"message\":\"Ride succeeded\"}", System.Text.Encoding.UTF8, "application/json") };
                    else
                        responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"succeeded\":\"failed\", \"message\":\"Ride doesn't exist\"}", System.Text.Encoding.UTF8, "application/json") };

                    return responseMessage;
                }
                else
                {
                    // ako korisnik nije ulogovan
                    var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"succeeded\":\"failed\", \"message\":\"Not logged in\"}", System.Text.Encoding.UTF8, "application/json") };
                    var setCookie = new CookieHeaderValue("myCookie", "") { Expires = DateTimeOffset.Now.AddDays(-1) };
                    responseMessage.Headers.AddCookies(new CookieHeaderValue[] { setCookie });
                    return responseMessage;
                }
            }
            else
            {
                // isetkao cookie = ga nema = nije ulgovan
                var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"succeeded\":\"failed\", \"message\":\"Not logged in\"}", System.Text.Encoding.UTF8, "application/json") };
                var setCookie = new CookieHeaderValue("myCookie", "") { Expires = DateTimeOffset.Now.AddDays(-1) };
                responseMessage.Headers.AddCookies(new CookieHeaderValue[] { setCookie });
                return responseMessage;
            }
        }

        [AllowAnonymous]
        [Route("api/ride/addComment")]
        [HttpPost]
        public HttpResponseMessage AddComment([FromBody]CommentParams commentParams)
        {
            CookieHeaderValue cookie;
            if ((cookie = Request.Headers.GetCookies("myCookie").FirstOrDefault()) != null)
            {
                string values = cookie.Cookies[0].Value;
                if (UserController.loggedIn.ContainsKey(values))
                {
                    User foundUser = null;
                    UserController.loggedIn.TryGetValue(values, out foundUser);

                    HttpResponseMessage responseMessage = null;

                    if (RideRepository.Instance.AddCommentToRide(commentParams.RideID, commentParams.Comment))
                        responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"comment\":\"success\", \"message\":\"Comment added\"}", System.Text.Encoding.UTF8, "application/json") };
                    else
                        responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"comment\":\"failed\", \"message\":\"Comment doesn't exist\"}", System.Text.Encoding.UTF8, "application/json") };

                    return responseMessage;
                }
                else
                {
                    // ako korisnik nije ulogovan
                    var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"comment\":\"failed\", \"message\":\"Not logged in\"}", System.Text.Encoding.UTF8, "application/json") };
                    var setCookie = new CookieHeaderValue("myCookie", "") { Expires = DateTimeOffset.Now.AddDays(-1) };
                    responseMessage.Headers.AddCookies(new CookieHeaderValue[] { setCookie });
                    return responseMessage;
                }
            }
            else
            {
                // isetkao cookie = ga nema = nije ulgovan
                var responseMessage = new HttpResponseMessage() { Content = new StringContent("{\"comment\":\"failed\", \"message\":\"Not logged in\"}", System.Text.Encoding.UTF8, "application/json") };
                var setCookie = new CookieHeaderValue("myCookie", "") { Expires = DateTimeOffset.Now.AddDays(-1) };
                responseMessage.Headers.AddCookies(new CookieHeaderValue[] { setCookie });
                return responseMessage;
            }
        }
    }
}
