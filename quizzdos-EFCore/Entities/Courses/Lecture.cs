using quizzdos_EFCore.Entities.BaseEntities;
using System.ComponentModel.DataAnnotations.Schema;

namespace quizzdos_EFCore.Entities.Courses
{
    public class Lecture : BaseEntity
    {
        public Lecture()
        {
            Quizzes = new HashSet<Quizz>();
        }
        public ICollection<Quizz> Quizzes { get; set; }
        public Guid CourseId { get; set; }
        [ForeignKey("CourseId")]
        public Course Course { get; set; } = null!;
    }
}
