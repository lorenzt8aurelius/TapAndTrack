using System.ComponentModel.DataAnnotations;

namespace NEW_QR_BASED_ATTENDANCE.DTOs
{
    public class LoginDto
    {
        [Required] public string Username { get; set; } = string.Empty;
        [Required] public string Password { get; set; } = string.Empty;
    }
}