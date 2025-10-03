namespace NEW_QR_BASED_ATTENDANCE.Models
{
public class AttendanceRecords
{
public int Id { get; set; }
public int PersonId { get; set; }
public DateTime Date { get; set; }
public bool IsPresent { get; set; }

public Person? Person { get; set; }
}
}
