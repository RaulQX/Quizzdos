using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using quizzdos_be.DataTransferObjects;
using quizzdos_be.Repositories;
using quizzdos_be.Responses.DataResponse;
using quizzdos_be.Responses.EmailValidation;
using quizzdos_be.Responses.ExistingUser;
using quizzdos_be.ViewModels;
using quizzdos_EFCore.Entities.Users;
using System.ComponentModel.DataAnnotations;
using System.Runtime.InteropServices;
using System.Runtime.Serialization;
using System.Security.Claims;
using System.Security.Cryptography;

namespace quizzdos_be.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _authRepository;
        private readonly ManagerContext _managerContext;
        private readonly IValidationRepository _validationRepository;

        public AuthController(IAuthRepository authRepository, ManagerContext managerContext, IValidationRepository validationRepository)
        {
            _validationRepository = validationRepository;
            _authRepository = authRepository;
            _managerContext = managerContext;
        }

        [HttpPost("Register")]
        [ProducesResponseType(typeof(DataResponse<User>), 200)]
        [ProducesResponseType(typeof(DataResponse<ExistingUserResponse>), 400)]
        [ProducesResponseType(typeof(DataResponse<EmailValidationResponse>), 400)]
        [ProducesResponseType(typeof(ErrorResponse<>), 400)]
        public async Task<IActionResult> Register(UserDTO request)
        {
            var userExists = await _validationRepository.CheckUserExists(request);
            if (userExists.Error)
            {
                return BadRequest(userExists);
            }
            var IsEmailValid = await _validationRepository.CheckEmailIsValid(request.Email ?? "");
            if (IsEmailValid.Error)
            {
                return BadRequest(IsEmailValid);
            }
            var IsPasswordValid = await _validationRepository.CheckPasswordIsValid(request.Password);
            if (IsPasswordValid.Error)
            {
                return BadRequest(IsPasswordValid);
            }
            var IsPhoneNumberValid = await _validationRepository.CheckPhoneNumberIsValid(request.PhoneNumber ?? "");
            if (IsPhoneNumberValid.Error)
            {
                return BadRequest(IsPhoneNumberValid);
            }

            User newUser = await _authRepository.Register(request);

            await _managerContext.Users.AddAsync(newUser);
            await _managerContext.SaveChangesAsync();

            return Ok(newUser);
        }
        [ProducesResponseType(typeof(DataResponse<string>), 200)]
        [ProducesResponseType(typeof(ErrorResponse<>), 400)]

        [HttpPost("Login")]
        public async Task<IActionResult> Login(string? username, string? email, string? phoneNumber, [Required] string password )
        {
            username ??= "";
            phoneNumber ??= "";
            email ??= "";

            User? user = await _managerContext.Users.Where(u => u.Username == username || u.PhoneNumber == phoneNumber || u.Email == email).FirstOrDefaultAsync();
            if (user == null)
                return BadRequest(new ErrorResponse<string>() { Error = true, Message = "User not found" });

            if (!await _validationRepository.VerifyPasswordHash(user, password, user.PasswordHash, user.PasswordSalt))
                return BadRequest(new ErrorResponse<string>() { Error = true, Message = "Wrong password" });

            string token = await _authRepository.CreateToken(user);

            return Ok(new DataResponse<string>() { Data = "bearer " + token } );
        }
    }
}
