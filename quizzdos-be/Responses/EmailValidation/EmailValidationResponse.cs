using quizzdos_be.Responses.DataResponse;

namespace quizzdos_be.Responses.EmailValidation
{
    public class EmailValidationResponse
    {
        public ErrorResponse EmailLength { get; set; } = new ErrorResponse();
        public ErrorResponse EmailFormat { get; set; } = new ErrorResponse();
		public ErrorResponse EmailExists { get; set; } = new ErrorResponse();
    }
}