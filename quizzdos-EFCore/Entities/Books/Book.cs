using quizzdos_EFCore.Entities.BaseEntities;
using quizzdos_EFCore.Entities.Courses;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace quizzdos_EFCore.Entities.Books
{
    public class Book : BaseEntity
    {
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Title { get; set; } = String.Empty; 
        [Required]
        [Column(TypeName = "nvarchar(25)")]
        public string ISBN { get; set; } = String.Empty;

        [Required]
        public Guid CourseId { get; set; }
        [ForeignKey("CourseId")]
        public Course Course { get; set; } = null!;
    }
}
