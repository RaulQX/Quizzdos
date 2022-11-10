using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text.RegularExpressions;
using Microsoft.IdentityModel.Tokens;
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
        Task<string> CreateToken(User user);
    }
    
    public class AuthRepository: IAuthRepository
    {
        private readonly ManagerContext _managerContext;
        private readonly IConfiguration _configuration;

        public AuthRepository(ManagerContext managerContext, IConfiguration configuration)
        {
            _managerContext = managerContext;
            _configuration = configuration;
        }

        public Task<User> Register(UserDTO request)
        {
            User newUser = new User();

            newUser.Username = request.Username ;
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

        public Task<string> CreateToken(User user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.MobilePhone, user.PhoneNumber)
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value));

            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(claims: claims,
                                             expires: DateTime.Now.AddDays(1),
                                             signingCredentials: cred);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);
            return Task.FromResult(jwt);
        }
    }
}
