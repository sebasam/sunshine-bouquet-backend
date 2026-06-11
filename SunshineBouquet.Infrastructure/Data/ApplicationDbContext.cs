using Microsoft.EntityFrameworkCore;
using SunshineBouquet.Domain.Entities;

namespace SunshineBouquet.Infrastructure.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

    public DbSet<Order> Orders { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.CustomerStore).IsRequired().HasMaxLength(100);
            entity.Property(e => e.OriginCountry).IsRequired().HasMaxLength(50);
            entity.Property(e => e.DestinationCity).IsRequired().HasMaxLength(50);
            entity.Property(e => e.Status).HasConversion<string>();
        });
    }
}