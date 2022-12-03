using quizzdos_EFCore.Enums;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using quizzdos_EFCore.Entities.Courses;
using quizzdos_EFCore.Entities.BaseEntities;
using quizzdos_EFCore.Entities.Notifications;

namespace quizzdos_EFCore.Entities.Users
{
    [Table("Person")]
    public class Person : BaseEntity
    {
        public Person()
        {
            Courses = new HashSet<Course>();
            Quizzmates = new HashSet<QuizzMate>();
            Notifications = new HashSet<Notification>();
        }
        public Person(User user)
        {
            Courses = new HashSet<Course>();
            Quizzmates = new HashSet<QuizzMate>();
            Notifications = new HashSet<Notification>();
            this.UserId = user.Id;
            this.User = user;
        }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string FirstName { get; set; } = String.Empty;
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string LastName { get; set; } = String.Empty;
        [Required]
        public PRole Role { get; set; } = PRole.Student;
        public PGender Gender {get; set;} = PGender.NotSpecified;
        public ICollection<Course> Courses { get; set; }
        public ICollection<QuizzMate> Quizzmates { get; set; }
        public ICollection<Notification> Notifications { get; set; }

        [Required]
        public Guid UserId { get; set; }
        [ForeignKey("UserId")]
        public User User { get; set; } = null!;
    }
}
