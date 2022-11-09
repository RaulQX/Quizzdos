namespace quizzdos_be.Responses.DataResponse
{
    public class ErrorResponse
    {
        public bool Error { get; set; } = false;
        public string Message { get; set; } = string.Empty;

        public ErrorResponse(string message)
        {
            Error = true;
            Message = message;
        }

        public ErrorResponse()
        {
        }
    }
}
