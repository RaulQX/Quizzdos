using Microsoft.AspNetCore.Mvc;
using quizzdos_be.DataTransferObjects;
using quizzdos_be.Repositories;
using quizzdos_be.Responses.DataResponse;
using quizzdos_be.Responses.EmailValidation;
using quizzdos_be.Responses.ExistingUser;
using quizzdos_EFCore.Entities.Users;

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
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public async Task<IActionResult> Register(UserDTO request)
        {
            var userExists = await _validationRepository.CheckUserExists(request);
            if (userExists.Error) 
            {
                return BadRequest(userExists);
            }
            var IsEmailValid = await _validationRepository.CheckEmailIsValid(request.Email);
            if (IsEmailValid.Error)
            {
                return BadRequest(IsEmailValid);
            }
            var IsPasswordValid = await _validationRepository.CheckPasswordIsValid(request.Password);
            if (IsPasswordValid.Error)
            {
                return BadRequest(IsPasswordValid);
            }    
            var IsPhoneNumberValid = await _validationRepository.CheckPhoneNumberIsValid(request.PhoneNumber);
            if (IsPhoneNumberValid.Error)
            {
                return BadRequest(IsPhoneNumberValid);
            }
              
            User newUser = await _authRepository.Register(request);

            await _managerContext.Users.AddAsync(newUser);
            await _managerContext.SaveChangesAsync();

            return Ok(new DataResponse<User>(newUser, "User was created successfully"));
        }
        
    }
}
