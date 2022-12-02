
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
    [Authorize(Roles = nameof(PRole.Admin))]
    public class AdminViewController : ControllerBase
    {
        private readonly IAdminViewRepository _adminViewRepository;
        public AdminViewController(IAdminViewRepository adminViewRepository)
        {
            _adminViewRepository = adminViewRepository;
        }

        [HttpGet("UsersWithPersonData")]
        [ProducesResponseType(typeof(DataResponse<List<UserAdminViewViewModel>>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public async Task<ActionResult<DataResponse<List<UserAdminViewViewModel>>>> GetAllUsersWithPerson(int page, int pageSize)
        {
            var users = await _adminViewRepository.GetAllUsersWithPerson(page, pageSize);
            if (users == null)
                return BadRequest(new ErrorResponse { Error = true, Message = "Failed to get all users with person data" });

            return Ok(new DataResponse<List<UserAdminViewViewModel>>(users));
        }
        [HttpGet("UsersWithNoNameSetUp")]
        [ProducesResponseType(typeof(DataResponse<List<UserAdminViewViewModel>>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public async Task<ActionResult<DataResponse<List<UserAdminViewViewModel>>>> GetAllUsersWithNoNameSetUp(int page, int pageSize)
        {
            var users = await _adminViewRepository.GetAllUsersWithNoNamesSetUp(page, pageSize);
            if (users == null)
                return BadRequest(new ErrorResponse { Error = true, Message = "Failed to get all users with no name set up" });

            return Ok(new DataResponse<List<UserAdminViewViewModel>>(users));
        }
        [HttpGet("UsersBasedOnRole")]
        [ProducesResponseType(typeof(DataResponse<List<UserAdminViewViewModel>>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public async Task<ActionResult<DataResponse<List<UserAdminViewViewModel>>>> GetAllUsersBasedOnRole(PRole role, int page, int pageSize)
        {
            var users = await _adminViewRepository.GetAllUsersBasedOnRole(role, page, pageSize);
            if (users == null)
                return BadRequest(new ErrorResponse { Error = true, Message = "Failed to get all users based on role" });

            return Ok(new DataResponse<List<UserAdminViewViewModel>>(users));
        }
        [HttpGet("UsersBasedOnUsername")]
        [ProducesResponseType(typeof(DataResponse<List<UserAdminViewViewModel>>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public async Task<ActionResult<DataResponse<List<UserAdminViewViewModel>>>> GetUsersBasedOnUsername(string username, int page, int pageSize)
        {
            var users = await _adminViewRepository.GetUsersBasedOnUsername(username, page, pageSize);
            if (users == null)
                return BadRequest(new ErrorResponse { Error = true, Message = "No users left" });

            return Ok(new DataResponse<List<UserAdminViewViewModel>>(users));
        }
        [HttpGet("GetUsers/{name}")]
        [ProducesResponseType(typeof(DataResponse<List<UserAdminViewViewModel>>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public async Task<ActionResult<DataResponse<List<UserAdminViewViewModel>>>> GetUsersBasedOnName(string name, int page, int pageSize)
        {
            var users = await _adminViewRepository.GetUsersBasedOnName(name, page, pageSize);
            if (users == null)
                return BadRequest(new ErrorResponse { Error = true, Message = "No users left" });

            return Ok(new DataResponse<List<UserAdminViewViewModel>>(users));
        }
        [HttpPut("PutPerson/{personId:Guid}")]
        [ProducesResponseType(typeof(DataResponse<Person>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public async Task<ActionResult<DataResponse<Person>>> PutPerson(Guid personId, string firstName, string lastName, PRole role)
        {
            var person = await _adminViewRepository.ModifyPersonBasedOnId(personId, firstName, lastName, role);
            if (person == null)
                return BadRequest(new ErrorResponse { Error = true, Message = "Failed to update person" });

            return Ok(new DataResponse<Person>(person));
        }
    }
}