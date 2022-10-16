using quizzdos_EFCore.Entities.BaseEntities;
using System.ComponentModel.DataAnnotations.Schema;

namespace quizzdos_EFCore.Entities.Users
{
    [Table("Users", Schema = "dbo")]
    public class User : Base
    {
        public User()
        {

        }
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public DateTime Created { get; set; } = DateTime.Now;
    }
}
