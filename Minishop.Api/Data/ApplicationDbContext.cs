using Microsoft.EntityFrameworkCore;
using Minishop.Api.Models;

namespace Minishop.Api.Data
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(
        DbContextOptions<ApplicationDbContext> options)
        : base(options)
        {
        }

        public DbSet<Product> Products => Set<Product>();
    }
}
