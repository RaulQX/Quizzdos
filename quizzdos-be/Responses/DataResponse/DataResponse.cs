namespace quizzdos_be.Responses.DataResponse
{
    public class DataResponse<T>:ErrorResponse<T>
    {
        public T? Data { get; set; }
    }
}
