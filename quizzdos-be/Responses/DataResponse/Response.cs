// namespace quizzdos_be.Responses.DataResponse
// {
//     abstract class Response<T, E>
//         where T : class
//         where E : class
//     {
//         public enum ResponseType {
//             Ok,
//             Error
//         }
//         
//         public ResponseType Type { get; private set; }
//         public bool IsOk { get; private set; }
//         public bool IsError { get; private set; }
// 
//         protected Response(ResponseType type) {
//             Type = type;
//             IsOk = type == ResponseType.Ok;
//             IsError = type == ResponseType.Error;
//         }
// 
//         public abstract T GetOk();
//         public abstract E GetError();
// 
//         public abstract override string ToString();
//     }
// 
//     class Ok<T, E> : Response<T, E>
//         where T : class
//         where E : class
//     {
//         public T Value { get; private set; }
// 
//         public Ok(T value) : base(ResponseType.Ok)
//         {
//             Value = value;
//         }
// 
//         public override T GetOk() => Value;
//         public override E GetError() => null;
// 
//         public override string ToString() => $"Ok({Value})";
//     }
// 
//     class Error<T, E> : Response<T, E>
//         where T : class
//         where E : class
//     {
//         public E Value { get; private set; }
// 
//         public Error(E value) : base(ResponseType.Error)
//         {
//             Value = value;
//         }
// 
//         public override T GetOk() => null;
//         public override E GetError() => Value;
// 
//         public override string ToString() => $"Error({Value})";
//     }
// }
