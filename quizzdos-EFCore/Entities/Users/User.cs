using quizzdos_EFCore.Entities.BaseEntities;
using System.ComponentModel.DataAnnotations.Schema;

namespace quizzdos_EFCore.Entities.Users
{
    [Table("Users", Schema = "dbo")]
    public class User : BaseEntity
    {
        public User()
        {

        }
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public byte[] PasswordSalt { get; set; } = null!;
        public byte[] PasswordHash { get; set; } = null!;
        public DateTime Created { get; set; }
    }
}
