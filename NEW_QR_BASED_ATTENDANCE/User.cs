using System.ComponentModel.DataAnnotations;

namespace NEW_QR_BASED_ATTENDANCE.Models
{
    public class User
    {
        public int Id { get; set; }
        [MaxLength(100)]
        public required string Name { get; set; }
        [MaxLength(100)]
        public required string Username { get; set; }
        public required string PasswordHash { get; set; }
        [MaxLength(50)]
        public required string Role { get; set; }

        // Navigation property: A user can have many attendance records.
        public ICollection<AttendanceRecord> AttendanceRecords { get; set; } = new List<AttendanceRecord>();
    }
}