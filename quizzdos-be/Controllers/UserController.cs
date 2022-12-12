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

        [HttpGet("current-user")]
        [ProducesResponseType(typeof(DataResponse<UserViewModel>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public ActionResult<DataResponse<UserViewModel>> GetUser()
        {
            var user = _userRepository.GetUser();
            if (user == null)
                return BadRequest(new ErrorResponse { Error = true, Message = "Failed to get user" });

            return Ok(new DataResponse<UserViewModel>(user));
        }
       
    }
}
