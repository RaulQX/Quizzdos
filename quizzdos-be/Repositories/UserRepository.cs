using quizzdos_be.DataTransferObjects;
using quizzdos_be.ViewModels;
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
    }
    public class UserRepository : IUserRepository
    {
        private readonly IHttpContextAccessor _contextAccessor;
        public UserRepository(IHttpContextAccessor contextAccessor)
        {
            _contextAccessor = contextAccessor;
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
                        Id = new Guid(_contextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Sid))
                    };
            }
            else return null;
        }
    }
}
