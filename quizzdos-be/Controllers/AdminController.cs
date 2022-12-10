
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using quizzdos_be.Repositories;
using quizzdos_be.Responses.DataResponse;
using quizzdos_be.ViewModels;
using quizzdos_EFCore.Entities.Users;
using quizzdos_EFCore.Enums;

namespace quizzdos_be.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly IAdminViewRepository _adminViewRepository;
        public AdminController(IAdminViewRepository adminViewRepository)
        {
            _adminViewRepository = adminViewRepository;
        }


        [HttpGet("users")]
        [ProducesResponseType(typeof(DataResponse<List<UserAdminViewViewModel>>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public async Task<ActionResult<DataResponse<List<UserAdminViewViewModel>>>> GetAllUsersWithPerson(int page, int pageSize, bool? name)
        {
            if (name == null)
            {
                var users = await _adminViewRepository.GetAllUsersWithPerson(page, pageSize);
                if (users == null)
                    return BadRequest(new ErrorResponse { Error = true, Message = "Failed to get all users with person data" });
                return Ok(new DataResponse<List<UserAdminViewViewModel>>(users));
            }

            if (name.Value)
            {
                var usersWithNames = await _adminViewRepository.GetAllUsersWithNamesSetUp(page, pageSize);
                if (usersWithNames == null)
                    return BadRequest(new ErrorResponse { Error = true, Message = "Failed to get all users with no name set up" });

                return Ok(new DataResponse<List<UserAdminViewViewModel>>(usersWithNames));
            }

            var usersWithoutNames = await _adminViewRepository.GetAllUsersWithNoNamesSetUp(page, pageSize);
            if (usersWithoutNames == null)
                return BadRequest(new ErrorResponse { Error = true, Message = "Failed to get all users with no name set up" });

            return Ok(new DataResponse<List<UserAdminViewViewModel>>(usersWithoutNames));

        }

        [HttpGet("users/role/{role}/name")]
        [ProducesResponseType(typeof(DataResponse<List<UserAdminViewViewModel>>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public async Task<ActionResult<DataResponse<List<UserAdminViewViewModel>>>> GetUsersByRoleAndUsername(PRole role, string? name, int page = 1, int pageSize = 6)
        {
            name ??= "";
            var users = await _adminViewRepository.GetUsersByRoleAndUsername(role, name, page, pageSize);
            if (users == null)
                return BadRequest(new ErrorResponse { Error = true, Message = "Failed to get users by role and name" });

            return Ok(new DataResponse<List<UserAdminViewViewModel>>(users));
        }

        [HttpGet("users/role/{role}")]
        [ProducesResponseType(typeof(DataResponse<List<UserAdminViewViewModel>>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public async Task<ActionResult<DataResponse<List<UserAdminViewViewModel>>>> GetAllUsersBasedOnRole(PRole role, int page, int pageSize)
        {
            var users = await _adminViewRepository.GetAllUsersBasedOnRole(role, page, pageSize);
            if (users == null)
                return BadRequest(new ErrorResponse { Error = true, Message = "Failed to get all users based on role" });

            return Ok(new DataResponse<List<UserAdminViewViewModel>>(users));
        }
        [HttpGet("users/username/{username}")]
        [ProducesResponseType(typeof(DataResponse<List<UserAdminViewViewModel>>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public async Task<ActionResult<DataResponse<List<UserAdminViewViewModel>>>> GetUsersBasedOnUsername(string username, int page, int pageSize)
        {
            var users = await _adminViewRepository.GetUsersBasedOnUsername(username, page, pageSize);
            if (users == null)
                return BadRequest(new ErrorResponse { Error = true, Message = "No users left" });

            return Ok(new DataResponse<List<UserAdminViewViewModel>>(users));
        }
        [HttpGet("users/name/{name}")]
        [ProducesResponseType(typeof(DataResponse<List<UserAdminViewViewModel>>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public async Task<ActionResult<DataResponse<List<UserAdminViewViewModel>>>> GetUsersBasedOnName(string name, int page, int pageSize)
        {
            var users = await _adminViewRepository.GetUsersBasedOnName(name, page, pageSize);
            if (users == null)
                return BadRequest(new ErrorResponse { Error = true, Message = "No users left" });

            return Ok(new DataResponse<List<UserAdminViewViewModel>>(users));
        }
        [HttpPut("person/{personId:Guid}")]
        [ProducesResponseType(typeof(DataResponse<Person>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public async Task<ActionResult<DataResponse<Person>>> PutPerson(Guid personId, string firstName, string lastName, PRole role)
        {
            var person = await _adminViewRepository.ModifyPersonBasedOnId(personId, firstName, lastName, role);
            if (person == null)
                return BadRequest(new ErrorResponse { Error = true, Message = "Failed to update person" });

            return Ok(new DataResponse<Person>(person));
        }
        [HttpDelete("person/{personId:Guid}")]
        [ProducesResponseType(typeof(DataResponse<Person>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public async Task<ActionResult<DataResponse<Person>>> DeletePerson(Guid personId)
        {
            var person = await _adminViewRepository.DeletePersonBasedOnId(personId);
            if (person == null)
                return BadRequest(new ErrorResponse { Error = true, Message = "Failed to delete person" });

            return Ok(new DataResponse<Person>(person));
        }

        [HttpDelete("user/{userId:Guid}")]
        [ProducesResponseType(typeof(DataResponse<User>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public async Task<ActionResult<DataResponse<User>>> DeleteUser(Guid userId)
        {
            var user = await _adminViewRepository.DeleteUserBasedOnId(userId);
            if (user == null)
                return BadRequest(new ErrorResponse { Error = true, Message = "Failed to delete user" });

            return Ok(new DataResponse<User>(user));
        }
        
    }
}