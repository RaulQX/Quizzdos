﻿using Microsoft.AspNetCore.Authorization;
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

        [HttpGet("GetUser")]
        [ProducesResponseType(typeof(DataResponse<UserViewModel>), 200)]
        [ProducesResponseType(typeof(ErrorResponse<string>), 400)]
        public ActionResult<DataResponse<UserViewModel>> GetUser()
        {
            var user = _userRepository.GetUser();
            if (user == null)
                return BadRequest(new ErrorResponse<string> { Error = true, Message = "Failed to get user" });

            return Ok(new DataResponse<UserViewModel>(){ Data = user });
        }
        [HttpGet("GetUsername")]
        [ProducesResponseType(typeof(DataResponse<string>), 200)]
        [ProducesResponseType(typeof(ErrorResponse<string>), 400)]
        public ActionResult<string> GetUsername()
        {
            var userName = _userRepository.GetUsername();
            if (userName == null)
                return BadRequest(new ErrorResponse<string> { Error = true, Message = "Failed to get username" });

            return Ok(new DataResponse<string>() { Data = userName });
        }
        [HttpGet("GetEmail")]
        [ProducesResponseType(typeof(DataResponse<string>), 200)]
        [ProducesResponseType(typeof(ErrorResponse<string>), 400)]
        public ActionResult<string> GetEmail()
        {
            var email = _userRepository.GetEmail();
            if (email == null)
                return BadRequest(new ErrorResponse<string> { Error = true, Message = "Failed to get email" });

            return Ok(new DataResponse<string>() { Data = email });
        }
        [HttpGet("GetPhoneNumber")]
        [ProducesResponseType(typeof(DataResponse<string>), 200)]
        [ProducesResponseType(typeof(ErrorResponse<string>), 400)]
        public ActionResult<string> GetPhoneNumber()
        {
            var phoneNumber = _userRepository.GetPhoneNumber();
            if (phoneNumber == null)
                return BadRequest(new ErrorResponse<string> { Error = true, Message = "Failed to get phone number" });

            return Ok(new DataResponse<string>() { Data = phoneNumber });
        }
    }
}
