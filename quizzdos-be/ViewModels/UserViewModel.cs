namespace quizzdos_be.ViewModels
{
    public class UserViewModel
    {
        public Guid Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public string JoinedDate { get; set; } = string.Empty;
    }
}
