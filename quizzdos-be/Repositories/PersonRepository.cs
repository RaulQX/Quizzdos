using Microsoft.EntityFrameworkCore;
using quizzdos_EFCore.Entities.Users;
using quizzdos_EFCore.Enums;

namespace quizzdos_be.Repositories
{
    public interface IPersonRepository
    {
        Task<Person?> GetPersonByIdAsync(Guid id);
        Task<Person?> GetPersonByUserIdAsync(Guid id);
        Task<Person> AddPersonAsync(User user);
        Task<Person?> UpdatePersonalDetailsByIdAsync(Guid personId, string firstName, string lastName, PGender gender);
        Task<Person?> UpdatePersonRoleByIdAsync(Guid personId, PRole role);
        Task<Person?> DeletePersonByIdAsync(Guid personId);
    }
    public class PersonRepository: IPersonRepository
    {
        private readonly ManagerContext _context;
        public PersonRepository(ManagerContext context)
        {
            _context = context;
        }
        public async Task<Person?> GetPersonByIdAsync(Guid personId)
        {
            return  await _context.Persons.FindAsync(personId);
        }
        public async Task<Person> AddPersonAsync(User user)
        {
            Person person = new(user);
            await _context.Persons.AddAsync(person);
            await _context.SaveChangesAsync();
            return person;
        }
        public async Task<Person?> UpdatePersonalDetailsByIdAsync(Guid personId, string firstName, string LastName, PGender gender)
        {
            var person = await GetPersonByIdAsync(personId);

            if (person == null) 
            {
                return null;
            }
            person.Gender = gender;
            person.FirstName = firstName;
            person.LastName = LastName;
            await _context.SaveChangesAsync();
            return person;
        }
        
        public async Task<Person?> UpdatePersonRoleByIdAsync(Guid personId, PRole role)
        {
            var person = await GetPersonByIdAsync(personId);

            if (person == null) 
            {
                return null;
            }

            person.Role = role;
            await _context.SaveChangesAsync();
            return person;
        }
        public async Task<Person?> DeletePersonByIdAsync(Guid personId)
        {
            var person = await GetPersonByIdAsync(personId);

            if (person == null)
            {
                return null;
            }
            _context.Persons.Remove(person);
            await _context.SaveChangesAsync();
            return person;
        }

        public async Task<Person?> GetPersonByUserIdAsync(Guid userId)
        {
            return await _context.Persons.FirstOrDefaultAsync(p => p.UserId == userId);
        }
    }
}
