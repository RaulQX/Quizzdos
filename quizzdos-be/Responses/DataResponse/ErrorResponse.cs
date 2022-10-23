namespace quizzdos_be.Responses.DataResponse
{
    public class ErrorResponse<T>
    {
        public bool Error { get; set; } = false;
        public string Message { get; set; } = string.Empty;
    }
}
