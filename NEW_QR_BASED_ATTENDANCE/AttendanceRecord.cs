using System.ComponentModel.DataAnnotations;

namespace NEW_QR_BASED_ATTENDANCE.Models
{
    public class AttendanceRecord
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        [MaxLength(50)]
        public required string Status { get; set; } // e.g., "Present", "Late", "Absent"

        public int UserId { get; set; } // Foreign Key
        public User? User { get; set; } // Navigation property
    }
}