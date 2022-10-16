using quizzdos_EFCore.Entities.BaseEntities;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace quizzdos_EFCore.Entities.Images
{
    public class Image : BaseEntity
    {
        [Required]
        [Column(TypeName = "nvarchar(500)")]
        public string Name { get; set; } = String.Empty;
    }
}
