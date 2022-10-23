namespace quizzdos_be.Responses.PhoneNumberValidation
{
    public class PhoneNumberValidationResponse
    {
        public bool PhoneNumberLengthOkay { get; set; } = true;
        public string PhoneNumberLengthMessage { get; set; } = string.Empty;
        public bool PhoneNumberFormatOkay { get; set; } = true;
        public string PhoneNumberFormatMessage { get; set; } = string.Empty;
        
    }
}
