using Microsoft.EntityFrameworkCore;
using Apiren.Models; // Productの場所に合わせて

namespace Apiren.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
    }
}
