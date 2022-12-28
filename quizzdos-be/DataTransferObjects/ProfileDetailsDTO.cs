using quizzdos_EFCore.Enums;

namespace quizzdos_be.DataTransferObjects
{
    public class ProfileDetailsDTO
    {
        public string? Username { get; set; } = string.Empty;
        public string? Name { get; set; } = string.Empty;
        public string? JoinedDate { get; set; } = string.Empty;
        public PRole Role { get; set; }
        public PGender Gender { get; set; }
    }
}
