using quizzdos_EFCore.Entities.BaseEntities;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace quizzdos_EFCore.Entities.Users
{
    public class QuizzMate:BaseEntity
    {
        [Required]
        public Guid CurrentPersonId { get; set; }
        [ForeignKey("PersonId")]
        public Person CurrentPerson { get; set; } = null!;

        [Required]
        public Guid QuizzMateId { get; set; }
        [ForeignKey("FriendId")] 
        public Person QuizzMatePerson { get; set; } = null!;

    }
}
