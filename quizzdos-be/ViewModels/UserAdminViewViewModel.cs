using quizzdos_EFCore.Enums;

namespace quizzdos_be.ViewModels
{
    public class UserAdminViewViewModel
    {
        public Guid UserId { get; set; }
        public Guid PersonId {get; set;}
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public PRole Role { get; set; } 
        public PGender Gender {get; set;}
    }
}
