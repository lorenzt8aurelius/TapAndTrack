using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NEW_QR_BASED_ATTENDANCE.Data;
using NEW_QR_BASED_ATTENDANCE.DTOs;
using NEW_QR_BASED_ATTENDANCE.Models;

namespace NEW_QR_BASED_ATTENDANCE.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AttendanceController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public AttendanceController(ApplicationDbContext context) => _context = context;

        [HttpPost("mark")]
        public async Task<IActionResult> MarkAttendance([FromBody] CheckInDto dto)
        {
            var user = await _context.Users.FirstOrDefaultAsync(p => p.Username == dto.Username);
            if (user == null) return NotFound("User not found.");

            var today = DateTime.UtcNow.Date;

            var alreadyCheckedIn = await _context.AttendanceRecords
                .AnyAsync(a => a.UserId == user.Id && a.Date >= today);

            if (alreadyCheckedIn) return BadRequest("Attendance already marked for today.");

            var record = new AttendanceRecord
            {
                UserId = user.Id,
                Date = DateTime.UtcNow,
                Status = "Present" // You can enhance this based on QR code data
            };

            _context.AttendanceRecords.Add(record);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Attendance marked successfully", user.Name, record.Date });
        }

        [HttpGet("records/{username}")]
        public async Task<IActionResult> GetUserRecords(string username)
        {
            var records = await _context.AttendanceRecords
                .Where(a => a.User!.Username == username)
                .OrderByDescending(a => a.Date)
                .ToListAsync();

            return Ok(records);
        }
    }
}
