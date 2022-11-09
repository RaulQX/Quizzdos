namespace quizzdos_be.Responses.DataResponse
{
    public class DataResponse<T>: ErrorResponse
    {
        public T? Data { get; set; }

        public DataResponse(T data, string message = "") : base(message)
        {
            Data = data;
        }
    }
}
