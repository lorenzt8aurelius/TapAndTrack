using Microsoft.EntityFrameworkCore;
using NEW_QR_BASED_ATTENDANCE.Models;
// Remove the invalid using directive. If AttendanceRecord is in NEW_QR_BASED_ATTENDANCE.Models, this is sufficient.

namespace NEW_QR_BASED_ATTENDANCE.Data
{
public class AttendanceContext : DbContext
{
public AttendanceContext(DbContextOptions<AttendanceContext> options) : base(options) { }

// Example tables
public DbSet<Person> Persons { get; set; }
public DbSet<AttendanceRecords> AttendanceRecords { get; set; }

}
}