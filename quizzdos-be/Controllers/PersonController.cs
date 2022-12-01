using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using quizzdos_be.Repositories;
using quizzdos_be.Responses.DataResponse;
using quizzdos_EFCore.Entities.Users;
using quizzdos_EFCore.Enums;

namespace quizzdos_be.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private readonly IPersonRepository _personRepository;
        public PersonController(IPersonRepository personRepository)
        {
            _personRepository = personRepository;
        }
        [HttpGet("PersonByUserId")]
        [ProducesResponseType(typeof(DataResponse<Person>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public async Task<ActionResult<DataResponse<Person>>> GetPersonByUserId(Guid userId)
        {
            var person = await _personRepository.GetPersonByUserIdAsync(userId);
            if (person == null)
                return BadRequest(new ErrorResponse { Error = true, Message = $"Cannot find person based on userId: {userId}" });

            return Ok(new DataResponse<Person>(person));
        }

        [HttpGet("PersonBy{personId:guid}")]
        [ProducesResponseType(typeof(DataResponse<Person>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public async Task<ActionResult<DataResponse<Person>>> GetPersonById(Guid personId)
        {
            var person = await _personRepository.GetPersonByIdAsync(personId);
            if (person == null)
                return BadRequest(new ErrorResponse { Error = true, Message = $"PersonId {personId} not found" });

            return Ok(new DataResponse<Person>(person));
        }
        [HttpPut("UpdatePersonNameBy{personId:guid}")]
        [ProducesResponseType(typeof(DataResponse<Person>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public async Task<ActionResult<DataResponse<Person>>> UpdatePersonNameById(Guid personId, string firstName, string lastName)
        {
            var person = await _personRepository.UpdatePersonNameByIdAsync(personId, firstName, lastName);
            if (person == null)
                return BadRequest(new ErrorResponse { Error = true, Message = "Failed to update person" });

            return Ok(new DataResponse<Person>(person));
        }
        [HttpPut("UpdatePersonRoleBy{personId:guid}")]
        [ProducesResponseType(typeof(DataResponse<Person>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public async Task<ActionResult<DataResponse<Person>>> UpdatePersonRoleById(Guid personId, PRole role)
        {
            var person = await _personRepository.UpdatePersonRoleByIdAsync(personId, role);
            if (person == null)
                return BadRequest(new ErrorResponse { Error = true, Message = "Failed to update person" });

            return Ok(new DataResponse<Person>(person));
        }
        [HttpDelete("DeletePersonBy{personId:guid}")]
        [ProducesResponseType(typeof(DataResponse<Person>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public async Task<ActionResult<DataResponse<Person>>> DeletePersonById(Guid personId)
        {
            var person = await _personRepository.DeletePersonByIdAsync(personId);
            if (person == null)
                return BadRequest(new ErrorResponse { Error = true, Message = "Failed to delete person" });

            return Ok(new DataResponse<Person>(person));
        }

    }
}
