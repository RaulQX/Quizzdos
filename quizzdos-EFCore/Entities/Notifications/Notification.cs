using quizzdos_EFCore.Entities.BaseEntities;
using quizzdos_EFCore.Entities.Users;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace quizzdos_EFCore.Entities.Notifications
{
    public class Notification : BaseEntity
    {
        [Required]
        public Guid PersonId { get; set; }
        [ForeignKey("PersonId")]
        public Person Person { get; set; } = null!;
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string NotificationText { get; set; } = String.Empty;
    }
}
