namespace quizzdos_be.Responses.ExistingUser
{
    public class ExistingUserResponse
    {
        public bool UsernameExists { get; set; } = false;
        public string UsernameMessage { get; set; } = string.Empty;
        public bool EmailExists { get; set; } = false;
        public string EmailMessage { get; set; } = string.Empty;
        public bool PhoneNumberExists { get; set; } = false;
        public string PhoneNumberMessage { get; set; } = string.Empty;
    }
}
