using quizzdos_EFCore.Entities.BaseEntities;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace quizzdos_EFCore.Entities.Courses
{
    public class Tip : BaseEntity
    {
        public string TipText { get; set; } = String.Empty;
        [Required]
        public Guid QuizzId { get; set; }
        [ForeignKey("QuizzId")]
        public Quizz Quizz { get; set; }
    }
}
