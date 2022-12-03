using quizzdos_EFCore.Entities.BaseEntities;
using quizzdos_EFCore.Enums;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace quizzdos_EFCore.Entities.Courses
{
    public class AnswerType : BaseEntity
    {
        [Required]
        public Guid QuestionId { get; set; }
        [ForeignKey("QuestionId")]
        public Question Question { get; set; } = null!;
        public ICollection<Answer> Answers { get; set; } = null!;
    }
}
