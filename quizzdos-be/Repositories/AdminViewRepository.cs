using Microsoft.EntityFrameworkCore;
using quizzdos_be.ViewModels;
using quizzdos_EFCore.Entities.Users;
using quizzdos_EFCore.Enums;

namespace quizzdos_be.Repositories
{
    public interface IAdminViewRepository {
        public Task<List<UserAdminViewViewModel>> GetAllUsersWithPerson(int page, int pageSize);
        public Task<List<UserAdminViewViewModel>> GetAllUsersWithNoNamesSetUp(int page, int pageSize);
        public Task<List<UserAdminViewViewModel>> GetAllUsersBasedOnRole(PRole role, int page, int pageSize);
        public Task<List<UserAdminViewViewModel>> GetUsersBasedOnUsername(string username, int page, int pageSize);
        public Task<List<UserAdminViewViewModel>> GetUsersBasedOnName(string name, int page, int pageSize);
        public Task<List<UserAdminViewViewModel>> GetUsersByRoleAndUsername(PRole role, string username, int page, int pageSize);
        public Task<Person?> ModifyPersonBasedOnId(Guid id, string firstName, string lastName, PRole role);
        public Task<Person?> DeletePersonBasedOnId(Guid id);
        public Task<User?> DeleteUserBasedOnId(Guid id);
    }
public class AdminViewRepository: IAdminViewRepository
    {
        private readonly ManagerContext _context;
        public AdminViewRepository(ManagerContext managerContext)
        {
            _context = managerContext;
        }
        public async Task<List<UserAdminViewViewModel>> GetAllUsersWithPerson(int page, int pageSize)
        {
            var users = from u in _context.Users
                        join p in _context.Persons on u.Id equals p.UserId
                        select new UserAdminViewViewModel()
                        {
                            UserId = u.Id,
                            PersonId = p.Id,
                            Username = u.Username,
                            Email = u.Email,
                            PhoneNumber = u.PhoneNumber,
                            FirstName = p.FirstName,
                            LastName = p.LastName,
                            Role = p.Role,
                            Gender = p.Gender
                        };
            return await users.Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();
        }

        public async Task<List<UserAdminViewViewModel>> GetAllUsersWithNoNamesSetUp(int page, int pageSize)
        {
            var users = from u in _context.Users
                        join p in _context.Persons on u.Id equals p.UserId
                        where p.FirstName == string.Empty || p.LastName == string.Empty
                        select new UserAdminViewViewModel()
                        {
                            UserId = u.Id,
                            PersonId = p.Id,
                            Username = u.Username,
                            Email = u.Email,
                            PhoneNumber = u.PhoneNumber,
                            FirstName = p.FirstName,
                            LastName = p.LastName,
                            Role = p.Role,
                            Gender = p.Gender
                        };
            return await users.Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();
        }

        public async Task<List<UserAdminViewViewModel>> GetAllUsersBasedOnRole(PRole role, int page, int pageSize)
        {
            var users = from u in _context.Users
                        join p in _context.Persons on u.Id equals p.UserId
                        where p.Role == role
                        select new UserAdminViewViewModel()
                        {
                            UserId = u.Id,
                            PersonId = p.Id,
                            Username = u.Username,
                            Email = u.Email,
                            PhoneNumber = u.PhoneNumber,
                            FirstName = p.FirstName,
                            LastName = p.LastName,
                            Role = p.Role,
                            Gender = p.Gender
                        };
            return await users.Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();
        }

        public async Task<List<UserAdminViewViewModel>> GetUsersBasedOnUsername(string username, int page, int pageSize)
        {
            var users = from u in _context.Users
                        join p in _context.Persons on u.Id equals p.UserId
                        where (u.Username.Contains(username) || username == string.Empty)
                        select new UserAdminViewViewModel()
                        {
                            UserId = u.Id,
                            PersonId = p.Id,
                            Username = u.Username,
                            Email = u.Email,
                            PhoneNumber = u.PhoneNumber,
                            FirstName = p.FirstName,
                            LastName = p.LastName,
                            Role = p.Role,
                            Gender = p.Gender
                        };
            return await users.Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();
        }

        public async Task<List<UserAdminViewViewModel>> GetUsersBasedOnName(string name, int page, int pageSize)
        {
            var users = from u in _context.Users
                        join p in _context.Persons on u.Id equals p.UserId
                        where p.FirstName.Contains(name) || p.LastName.Contains(name)
                        select new UserAdminViewViewModel()
                        {
                            UserId = u.Id,
                            PersonId = p.Id,
                            Username = u.Username,
                            Email = u.Email,
                            PhoneNumber = u.PhoneNumber,
                            FirstName = p.FirstName,
                            LastName = p.LastName,
                            Role = p.Role,
                            Gender = p.Gender
                        };
            return await users.Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();
        }

        public async Task<UserAdminViewViewModel?> GetSingleUserBasedOnUsername(string username)
        {
            var user = from u in _context.Users
                       join p in _context.Persons on u.Id equals p.UserId
                       where u.Username == username
                       select new UserAdminViewViewModel()
                       {
                            UserId = u.Id,
                            PersonId = p.Id,
                            Username = u.Username,
                            Email = u.Email,
                            PhoneNumber = u.PhoneNumber,
                            FirstName = p.FirstName,
                            LastName = p.LastName,
                            Role = p.Role,
                            Gender = p.Gender
                       };
            return await user.FirstOrDefaultAsync();
        }

        public async Task<Person?> ModifyPersonBasedOnId(Guid id, string firstName, string lastName, PRole role)
        {
            var personToModify = await _context.Persons.FirstOrDefaultAsync(p => p.Id == id);
            if (personToModify == null)
            {
                return null;
            }
            
            personToModify.FirstName = firstName;
            personToModify.LastName = lastName;
            personToModify.Role = role;

            await _context.SaveChangesAsync();

            return personToModify;
        }

        public async Task<Person?> DeletePersonBasedOnId(Guid id)
        {
            var  personToDelete = await _context.Persons.FirstOrDefaultAsync(p => p.Id == id);
            if (personToDelete == null)
            {
                return null;
            }
            _context.Persons.Remove(personToDelete);
            await _context.SaveChangesAsync();
            return personToDelete;
        }

        public async Task<User?> DeleteUserBasedOnId(Guid id)
        {
            var userToDelete = await _context.Users.FirstOrDefaultAsync(u => u.Id == id);
            if (userToDelete == null)
            {
                return null;
            }
            _context.Users.Remove(userToDelete);
            await _context.SaveChangesAsync();
            return userToDelete;
        }

        public async Task<List<UserAdminViewViewModel>> GetUsersByRoleAndUsername(PRole role, string username, int page, int pageSize)
        {
            var users = from u in _context.Users
                        join p in _context.Persons on u.Id equals p.UserId
                        where p.Role == role && (u.Username.Contains(username) || username == string.Empty)
                        select new UserAdminViewViewModel()
                        {
                            UserId = u.Id,
                            PersonId = p.Id,
                            Username = u.Username,
                            Email = u.Email,
                            PhoneNumber = u.PhoneNumber,
                            FirstName = p.FirstName,
                            LastName = p.LastName,
                            Role = p.Role,
                        };
            return await users.Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();
        }
    }
}