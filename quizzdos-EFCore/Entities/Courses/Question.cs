using quizzdos_EFCore.Entities.BaseEntities;
using quizzdos_EFCore.Entities.Images;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace quizzdos_EFCore.Entities.Courses
{
    public class Question : BaseEntity
    {
        public Question ()
        {
            Answers = new HashSet<AnswerType>();
        }
        [Required]
        public Guid QuizzId { get; set; }
        [ForeignKey("QuizzId")]
        public Quizz Quizz { get; set; } = null!;
        public Guid? ImageId { get; set; }
        [ForeignKey("ImageId")]
        public Image? Image { get; set; }
        public double Mark { get; set; }
        public ICollection<AnswerType> Answers;
    }
}
