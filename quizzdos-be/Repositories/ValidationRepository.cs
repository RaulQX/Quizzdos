using System.Text.RegularExpressions;
using quizzdos_be.DataTransferObjects;
using quizzdos_be.Responses.DataResponse;
using quizzdos_be.Responses.EmailValidation;
using quizzdos_be.Responses.ExistingUser;
using quizzdos_be.Responses.PhoneNumberValidation;

namespace quizzdos_be.Repositories
{
    public interface IValidationRepository
    {
        Task<DataResponse<ExistingUserResponse>> CheckUserExists(UserDTO request);
        Task<DataResponse<EmailValidationResponse>> CheckEmailIsValid(string email);
        Task<DataResponse<PhoneNumberValidationResponse>> CheckPhoneNumberIsValid(string phoneNumber);
        Task<ErrorResponse<string>> CheckPasswordIsValid(string password);
    }

    public class ValidationRepository:IValidationRepository
    {
        private readonly ManagerContext _managerContext;

        public ValidationRepository(ManagerContext managerContext)
        {
            _managerContext = managerContext;
        }
        
        public Task<ExistingUserResponse> CheckUserExistsProperties(UserDTO user)
        {
            ExistingUserResponse exisitingUserResponse = new ExistingUserResponse();

            exisitingUserResponse.UsernameExists = _managerContext.Users.Any(u => u.Username == user.Username);
            if (exisitingUserResponse.UsernameExists)
            {
                exisitingUserResponse.UsernameMessage = "Username already exists";
            }
            exisitingUserResponse.EmailExists = _managerContext.Users.Any(u => u.Email == user.Email);
            if (exisitingUserResponse.EmailExists)
            {
                exisitingUserResponse.EmailMessage = "Email already exists";
            }
            exisitingUserResponse.PhoneNumberExists = _managerContext.Users.Any(u => u.PhoneNumber == user.PhoneNumber);
            if (exisitingUserResponse.PhoneNumberExists)
            {
                exisitingUserResponse.PhoneNumberMessage = "Phone number already exists";
            }

            return Task.FromResult(exisitingUserResponse);
            
        }

        public Task<EmailValidationResponse> ValidateEmail(string email)
        {
            EmailValidationResponse emailValidationResponse = new EmailValidationResponse();
            
            if (string.IsNullOrWhiteSpace(email))
            {
                emailValidationResponse.EmailExists = false;
                emailValidationResponse.EmailExistsMessage = "Email is required";
            }   
            if (email.Length >= 100)
            {
                emailValidationResponse.EmailLengthOkay = false;
                emailValidationResponse.EmailExistsMessage = "Email is too long";
            }
            if (!Regex.IsMatch(email, @"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$"))
            {
                emailValidationResponse.EmailFormatOkay = false;
                emailValidationResponse.EmailExistsMessage = "Email is not in the correct format";
            }

            return Task.FromResult(emailValidationResponse);
        }

        public Task<PhoneNumberValidationResponse> ValidatePhoneNumber(string phoneNumber)
        {
            PhoneNumberValidationResponse phoneNumberValidationResponse = new PhoneNumberValidationResponse();

            if (phoneNumber.Length != 10)
            {
                phoneNumberValidationResponse.PhoneNumberLengthOkay = false;
                phoneNumberValidationResponse.PhoneNumberLengthMessage = "Phone number is not 10 digits";
            }
            if (!Regex.IsMatch(phoneNumber, @"^(\d{10})$"))
            {
                phoneNumberValidationResponse.PhoneNumberFormatOkay = false;
                phoneNumberValidationResponse.PhoneNumberFormatMessage = "Phone number is not in the correct format";
            }

            return Task.FromResult(phoneNumberValidationResponse);
        }

        public async Task<DataResponse<EmailValidationResponse>> CheckEmailIsValid(string email) 
        {
            EmailValidationResponse emailValidationResponse = await ValidateEmail(email);
            
            DataResponse<EmailValidationResponse> emailResponse = new DataResponse<EmailValidationResponse>();
            emailResponse.Data = emailValidationResponse;

            if (!emailValidationResponse.EmailLengthOkay || !emailValidationResponse.EmailFormatOkay)
            {
                emailResponse.Error = true;
                emailResponse.Message = "Email is not valid";

            }

            return emailResponse;
        }
        public async Task<DataResponse<PhoneNumberValidationResponse>> CheckPhoneNumberIsValid(string phoneNumber)
        {
            PhoneNumberValidationResponse phoneNumberValidationResponse = await ValidatePhoneNumber(phoneNumber);

            DataResponse<PhoneNumberValidationResponse> phoneNumberResponse = new DataResponse<PhoneNumberValidationResponse>();
            phoneNumberResponse.Data = phoneNumberValidationResponse;

            if (!phoneNumberValidationResponse.PhoneNumberLengthOkay || !phoneNumberValidationResponse.PhoneNumberFormatOkay)
            {
                phoneNumberResponse.Error = true;
                phoneNumberResponse.Message = "Phone number is not valid";
            }

            return phoneNumberResponse;
        }

        public async Task<DataResponse<ExistingUserResponse>> CheckUserExists(UserDTO user)
        {
            ExistingUserResponse existingUserResponse = await CheckUserExistsProperties(user);

            DataResponse<ExistingUserResponse> existingUserResponseData = new DataResponse<ExistingUserResponse>();
            existingUserResponseData.Data = existingUserResponse;

            if (existingUserResponse.UsernameExists || existingUserResponse.EmailExists || existingUserResponse.PhoneNumberExists)
            {
                existingUserResponseData.Error = true;
                existingUserResponseData.Message = "User already exists";
            }

            return existingUserResponseData;
        }

        public Task<ErrorResponse<string>> CheckPasswordIsValid(string password)
        {
            ErrorResponse<string> passwordResponse = new ErrorResponse<string>();

            if (string.IsNullOrWhiteSpace(password))
            {
                passwordResponse.Error = true;
                passwordResponse.Message = "Password is required";
            }
            if (password.Length < 8)
            {
                passwordResponse.Error = true;
                passwordResponse.Message = "Password is too short";
            }
            if (password.Length > 100)
            {
                passwordResponse.Error = true;
                passwordResponse.Message = "Password is too long";
            }

            return Task.FromResult(passwordResponse);
        }

    }
}
