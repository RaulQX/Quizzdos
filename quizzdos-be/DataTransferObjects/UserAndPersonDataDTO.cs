using quizzdos_EFCore.Enums;

namespace quizzdos_be.DataTransferObjects
{
    public class UserAndPersonDataDTO
    {
        public string? Username { get; set; } = string.Empty;
        public string? Email { get; set; } = string.Empty;
        public string? PhoneNumber { get; set; } = string.Empty;

        public string? FirstName { get; set; } = string.Empty;
        public string? LastName { get; set;} = string.Empty;
        public PRole Role { get; set; }
        public PGender Gender { get; set; }

    }
}
