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
        [HttpGet("CurrentPersonByUserId")]
        [ProducesResponseType(typeof(DataResponse<Person>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public async Task<ActionResult<DataResponse<Person>>> GetPersonByUserId(Guid userId)
        {
            var person = await _personRepository.GetPersonByUserIdAsync(userId);
            if (person == null)
                return BadRequest(new ErrorResponse { Error = true, Message = $"Cannot find person based on userId: {userId}" });

            return Ok(new DataResponse<Person>(person));
        }

        [HttpGet("CurrentPerson/{personId:Guid}")]
        [ProducesResponseType(typeof(DataResponse<Person>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public async Task<ActionResult<DataResponse<Person>>> GetPersonById(Guid personId)
        {
            var person = await _personRepository.GetPersonByIdAsync(personId);
            if (person == null)
                return BadRequest(new ErrorResponse { Error = true, Message = $"PersonId {personId} not found" });

            return Ok(new DataResponse<Person>(person));
        }
        [HttpPut("UpdatePersonNames/{personId:Guid}")]
        [ProducesResponseType(typeof(DataResponse<Person>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public async Task<ActionResult<DataResponse<Person>>> UpdatePersonNameById(Guid personId, string firstName, string lastName, PGender gender)
        {
            var person = await _personRepository.UpdatePersonalDetailsByIdAsync(personId, firstName, lastName, gender);
            if (person == null)
                return BadRequest(new ErrorResponse { Error = true, Message = "Failed to update person" });

            return Ok(new DataResponse<Person>(person));
        }
        [HttpPut("UpdatePersonRole/{personId:Guid}")]
        [ProducesResponseType(typeof(DataResponse<Person>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public async Task<ActionResult<DataResponse<Person>>> UpdatePersonRoleById(Guid personId, PRole role)
        {
            var person = await _personRepository.UpdatePersonRoleByIdAsync(personId, role);
            if (person == null)
                return BadRequest(new ErrorResponse { Error = true, Message = "Failed to update person" });

            return Ok(new DataResponse<Person>(person));
        }
        [HttpDelete("DeletePerson/{personId:Guid}")]
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
