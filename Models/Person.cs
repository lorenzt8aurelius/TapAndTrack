namespace NEW_QR_BASED_ATTENDANCE.Models
{
    public class Person
    {
        public int Id { get; set; }
        public required string FullName { get; set; }

        // Add this missing property
        public required string PersonCode { get; set; } 
    }
}
       