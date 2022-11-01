namespace quizzdos_be.Responses.DataResponse
{
    public enum ResponseType
    {
        Error,
        Ok
    }
    public class Response
    {
        public ResponseType Type { get; set; }

        public Response(ResponseType type)
        {
            Type = type;
        }
    }
}
