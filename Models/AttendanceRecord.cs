namespace NEW_QR_BASED_ATTENDANCE.Models
{
    public class AttendanceRecord
    {
        public int Id { get; set; }
        public int PersonId { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; }
    }
}
