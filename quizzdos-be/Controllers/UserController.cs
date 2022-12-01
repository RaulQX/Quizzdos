using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using quizzdos_be.Repositories;
using quizzdos_be.Responses.DataResponse;
using quizzdos_be.ViewModels;

namespace quizzdos_be.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet("User")]
        [ProducesResponseType(typeof(DataResponse<UserViewModel>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public ActionResult<DataResponse<UserViewModel>> GetUser()
        {
            var user = _userRepository.GetUser();
            if (user == null)
                return BadRequest(new ErrorResponse { Error = true, Message = "Failed to get user" });

            return Ok(new DataResponse<UserViewModel>(user));
        }
        [HttpGet("Username")]
        [ProducesResponseType(typeof(DataResponse<string>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public ActionResult<string> GetUsername()
        {
            var userName = _userRepository.GetUsername();
            if (userName == null)
                return BadRequest(new ErrorResponse { Error = true, Message = "Failed to get username" });

            return Ok(new DataResponse<string>(userName));
        }
        [HttpGet("Email")]
        [ProducesResponseType(typeof(DataResponse<string>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public ActionResult<string> GetEmail()
        {
            var email = _userRepository.GetEmail();
            if (email == null)
                return BadRequest(new ErrorResponse { Error = true, Message = "Failed to get email" });

            return Ok(new DataResponse<string>(email));
        }
        [HttpGet("PhoneNumber")]
        [ProducesResponseType(typeof(DataResponse<string>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public ActionResult<string> GetPhoneNumber()
        {
            var phoneNumber = _userRepository.GetPhoneNumber();
            if (phoneNumber == null)
                return BadRequest(new ErrorResponse { Error = true, Message = "Failed to get phone number" });

            return Ok(new DataResponse<string>(phoneNumber));
        }

        [HttpGet("Id")]
        [ProducesResponseType(typeof(DataResponse<string>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public ActionResult<string> GetId()
        {
            var userId = _userRepository.GetUserId();
            if (userId == null)
                return BadRequest(new ErrorResponse { Error = true, Message = "Failed to get user id" });

            return Ok(new DataResponse<string>(userId));
        }
    }
}
