using Microsoft.EntityFrameworkCore;
using quizzdos_be.DataTransferObjects;
using quizzdos_be.ViewModels;
using quizzdos_EFCore.Entities.Users;
using quizzdos_EFCore.Enums;
using System.Security.Claims;

namespace quizzdos_be.Repositories
{
    public interface IUserRepository
    {
        public string? GetUsername();
        public string? GetEmail();
        public string? GetPhoneNumber();
        public string? GetUserId();
        public UserViewModel? GetUser();
        public Task<User> AddUserAsync(User user);
        public Task<User?> GetUserByAnyField(string? username, string? email, string? phoneNumber);
        public Task<List<UserViewModel>> GetAllUsers();


    }
    public class UserRepository : IUserRepository
    {
        private readonly IHttpContextAccessor _contextAccessor;
        private readonly ManagerContext _context;
        public UserRepository(IHttpContextAccessor contextAccessor, ManagerContext context)
        {
            _contextAccessor = contextAccessor;
            _context = context;
        }
        public string? GetUsername()
        {
            if (_contextAccessor.HttpContext != null)
            {
                return _contextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Name);
            }
            else return null;
        }
        public string? GetEmail()
        {
            if (_contextAccessor.HttpContext != null)
            {
                return _contextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Email);
            }
            else return null;
        }
        public string? GetPhoneNumber()
        {
            if (_contextAccessor.HttpContext != null)
            {
                return _contextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.MobilePhone);
            }
            else return null;
        }
        public string? GetUserId()
        {
            if (_contextAccessor.HttpContext != null)
            {
                return _contextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Sid);
            }
            else return null;
        }

        public UserViewModel? GetUser()
        {
            if (_contextAccessor.HttpContext != null)
            {
                return
                    new UserViewModel()
                    {
                        Username = _contextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Name),
                        Email = _contextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Email),
                        PhoneNumber = _contextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.MobilePhone),
                        Id = new Guid(_contextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Sid)),
                        JoinedDate = DateTime.Parse(_contextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.DateOfBirth)).ToString("dd/MM/yyyy")
                    };
            }
            else return null;
        }

        public async Task<User> AddUserAsync(User user)
        {
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<User?> GetUserByAnyField(string? username, string? email, string? phoneNumber)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Username == username || u.Email == email || u.PhoneNumber == phoneNumber);
        }

        public async Task<List<UserViewModel>> GetAllUsers()
        {
            return await _context.Users.Select(u => new UserViewModel()
            {
                Id = u.Id,
                Username = u.Username,
                Email = u.Email,
                PhoneNumber = u.PhoneNumber
            }).ToListAsync();
        }


        
    }
}
