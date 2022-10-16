using quizzdos_EFCore.Entities.BaseEntities;
using quizzdos_EFCore.Entities.Images;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace quizzdos_EFCore.Entities.Courses
{
    public class Quizz : BaseEntity
    {
        public Quizz ()
        {
            Questions = new HashSet<Question>();
            Tips = new HashSet<Tip>();
        }
        [Required]
        [ForeignKey("CourseId")]
        public Guid CourseId { get; set; }
        public Course Course { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Title { get; set; } = string.Empty;
        [Required]

        public double PassingGrade { get; set; }
        public double Grade { get; set; }
        public double Duration { get; set; }
        public ICollection<Question> Questions { get; set; }
        public Guid ImageId { get; set; }
        [ForeignKey("ImageId")]
        public Image Image { get; set; }
        public ICollection<Tip> Tips { get; set; }
    }
}
