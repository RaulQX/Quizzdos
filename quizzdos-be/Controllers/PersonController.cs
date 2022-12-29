using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using quizzdos_be.DataTransferObjects;
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
        [HttpGet("userid/{userId:Guid}")]
        [ProducesResponseType(typeof(DataResponse<Person>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public async Task<ActionResult<DataResponse<Person>>> GetPersonByUserId(Guid userId)
        {
            var person = await _personRepository.GetPersonByUserIdAsync(userId);
            if (person == null)
                return BadRequest(new ErrorResponse { Error = true, Message = $"Cannot find person based on userId: {userId}" });

            return Ok(new DataResponse<Person>(person));
        }
        [HttpGet("{personId:Guid}")]
        [ProducesResponseType(typeof(DataResponse<Person>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public async Task<ActionResult<DataResponse<Person>>> GetPersonById(Guid personId)
        {
            var person = await _personRepository.GetPersonByIdAsync(personId);
            if (person == null)
                return BadRequest(new ErrorResponse { Error = true, Message = $"Cannot find person based on personId: {personId}" });

            return Ok(new DataResponse<Person>(person));
        }

        [HttpGet("profile-details/{personId:Guid}")]
        [ProducesResponseType(typeof(DataResponse<Person>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public async Task<ActionResult<DataResponse<ProfileDetailsDTO>>> GetProfileDetails(Guid personId)
        {
            var profileDetails = await _personRepository.GetProfileDetailsByIdAsync(personId);
            if (profileDetails == null)
                return BadRequest(new ErrorResponse { Error = true, Message = $"Cannot find profile details based on personId: {personId}" });

            return Ok(new DataResponse<ProfileDetailsDTO>(profileDetails));
        }

        [HttpPut("{personId:Guid}")]
        [ProducesResponseType(typeof(DataResponse<Person>), 200)]
        [ProducesResponseType(typeof(ErrorResponse), 400)]
        public async Task<ActionResult<DataResponse<Person>>> UpdatePersonDetailsById(Guid personId, string firstName, string lastName, PGender gender)
        {
            var person = await _personRepository.UpdatePersonalDetailsByIdAsync(personId, firstName, lastName, gender);
            if (person == null)
                return BadRequest(new ErrorResponse { Error = true, Message = "Failed to update person" });

            return Ok(new DataResponse<Person>(person));
        }
    }
}
