using Microsoft.EntityFrameworkCore;
using quizzdos_EFCore.Entities.Books;
using quizzdos_EFCore.Entities.Courses;
using quizzdos_EFCore.Entities.Images;
using quizzdos_EFCore.Entities.Notifications;
using quizzdos_EFCore.Entities.Users;

namespace gps_manager.EFCore
{
    public class ManagerContext : DbContext
    {
        public ManagerContext(DbContextOptions<ManagerContext> options)
            : base(options)
        {
        }
        public DbSet<User> Users { get; set; } = null!;
        public DbSet<Person> Persons { get; set; } = null!;
        public DbSet<Book> Books { get; set; } = null!;
        public DbSet<Answer> Answers { get; set; } = null!;
        public DbSet<AnswerType> AnswerTypes { get; set; } = null!;
        public DbSet<Course> Courses { get; set; } = null!;
        public DbSet<Question> Questions { get; set; } = null!;
        public DbSet<Quizz> Quizzes { get; set; } = null!;
        public DbSet<Tip> Tips { get; set; } = null!;
        public DbSet<Image> Images { get; set; } = null!;
        public DbSet<Notification> Notifications { get; set; } = null!;
        public DbSet<QuizzMate> QuizzMates { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(x=> 
            {
                x.Property(s => s.Id)
                    .ValueGeneratedOnAdd()
                    .IsRequired();
                x.Property(s => s.Created)
                    .HasDefaultValueSql("GETUTCDATE()")
                    .IsRequired();
                x.Property(s => s.Email)
                    .HasColumnType("nvarchar(100)")
                    .IsRequired();
                x.Property(s => s.Password)
                    .HasColumnType("nvarchar(max)")
                    .IsRequired();
            });

            modelBuilder.Entity<Quizz>(x =>
            {
                x.HasOne(i => i.Image).WithMany().OnDelete(DeleteBehavior.NoAction);
            });
            modelBuilder.Entity<Person>(q =>
            {
                q.HasMany(q => q.Quizzmates).WithOne(q => q.CurrentPerson);
            });

            modelBuilder.Entity<QuizzMate>(q =>
            {
                q.HasOne(q => q.CurrentPerson).WithMany(q => q.Quizzmates).OnDelete(DeleteBehavior.NoAction);
            });
            
        }
    }
}