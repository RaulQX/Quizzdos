using quizzdos_EFCore.Entities.BaseEntities;
using quizzdos_EFCore.Enums;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace quizzdos_EFCore.Entities.Courses
{
    public class Answer : BaseEntity
    {
        [Required]
        public Guid AnswerTypeId { get; set; }
        [ForeignKey("AnswerTypeId")]
        public AnswerType AnswerType { get; set; }
        public AnswerTypeEnum Type { get; set; }
    }
}
