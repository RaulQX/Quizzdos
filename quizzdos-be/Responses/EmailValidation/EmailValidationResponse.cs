namespace quizzdos_be.Responses.EmailValidation
{
    public class EmailValidationResponse
    {
        public bool EmailLengthOkay { get; set; } = true;
        public string EmailLengthMessage { get; set; } = string.Empty;
        public bool EmailFormatOkay { get; set; } = true;
        public string EmailFormatMessage { get; set; } = string.Empty;
        public bool EmailExists { get; set; } = true;
        public string EmailExistsMessage { get; set; } = string.Empty;
        
    }
}
