using System.ComponentModel.DataAnnotations;

namespace Minishop.Api.DTOs
{
    public class CreateProductDto
    {
        [Required]
        [StringLength(100)]
        public string Name { get; set; } = string.Empty;

        [StringLength(500)]
        public string Description { get; set; } = string.Empty;

        [Range(0.01, 999999)]
        public decimal Price { get; set; }

        [Range(0, 999999)]
        public int Stock { get; set; }
    }
}
