using quizzdos_EFCore.Entities.BaseEntities;
using quizzdos_EFCore.Entities.Books;
using quizzdos_EFCore.Entities.Images;
using quizzdos_EFCore.Entities.Users;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace quizzdos_EFCore.Entities.Courses
{
    [Table("Courses")]
    public class Course : BaseEntity
    {
        public Course ()
        {
            Quizzes = new HashSet<Quizz>();
            Books = new HashSet<Book>();
        }
        [Required]
        public Guid PersonId { get; set; }
        [ForeignKey("PersonId")]
        public Person Person { get; set; } = null!;
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Title { get; set; } = string.Empty; 
        [Required]
        [Column(TypeName = "nvarchar(10)")]
        public string ShortTitle { get; set; } = string.Empty;
        public Guid? ImageId { get; set; }
        [ForeignKey("ImageId")]
        public Image Image { get; set; } = null!;
        public ICollection<Quizz> Quizzes {get; set;}
        public ICollection<Book> Books {get; set;}
    }
}
