using System.Security.Cryptography;
using System.Text.RegularExpressions;
using quizzdos_be.DataTransferObjects;
using quizzdos_be.Responses.DataResponse;
using quizzdos_be.Responses.EmailValidation;
using quizzdos_be.Responses.ExistingUser;
using quizzdos_be.Responses.PhoneNumberValidation;
using quizzdos_EFCore.Entities.Users;

namespace quizzdos_be.Repositories
{
    public interface IAuthRepository {
        Task<User> Register(UserDTO request);
        public void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt);
        Task<User> Login(string username, string password);
    }
    
    public class AuthRepository: IAuthRepository
    {
        private readonly ManagerContext _managerContext;
        
        public AuthRepository(ManagerContext managerContext)
        {
            _managerContext = managerContext;
        }

        public Task<User> Register(UserDTO request)
        {
            User newUser = new User();

            newUser.Username = request.Username;
            newUser.Email = request.Email;
            newUser.PhoneNumber = request.PhoneNumber;

            CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt);

            newUser.PasswordHash = passwordHash;
            newUser.PasswordSalt = passwordSalt;

            return Task.FromResult(newUser);
        }

        public void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public Task<User> Login(string username, string password)
        {
            throw new NotImplementedException();
        }

    }
}
