namespace quizzdos_be.Responses.DataResponse
{
    public class Response
    {
        public enum ResponseType
        {
            Error,
            Ok
        }

        public ResponseType Type { get; set; }

        public Response(ResponseType type)
        {
            Type = type;
        }
    }

    public class DataResponse<T> : Response
    {
        public T? Data { get; set; }

        public DataResponse(T? data) : base(ResponseType.Ok)
        {
            Data = data;
        }
    }

    public class ErrorResponse : Response
    {
        public string? Message { get; set; }

        public ErrorResponse(string? message) : base(ResponseType.Error)
        {
            Message = message;
        }
    }
}
