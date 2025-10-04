using Microsoft.EntityFrameworkCore;
using NEW_QR_BASED_ATTENDANCE.Models;

namespace NEW_QR_BASED_ATTENDANCE.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        // These DbSets represent the tables that EF Core will manage.
        public DbSet<User> Users { get; set; }
        public DbSet<AttendanceRecord> AttendanceRecords { get; set; }
    }
}