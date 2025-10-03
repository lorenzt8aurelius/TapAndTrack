using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NEW_QR_BASED_ATTENDANCE.Data;
using NEW_QR_BASED_ATTENDANCE.Models;
using NEW_QR_BASED_ATTENDANCE.Dtos;


namespace AttendanceBackend.Controllers
{
[ApiController]
[Route("api/[controller]")]
public class AttendanceController : ControllerBase
{
private readonly AttendanceContext _context;
public AttendanceController(AttendanceContext context) => _context = context;

[HttpPost("checkin")]
public async Task<IActionResult> CheckIn([FromBody] CheckInDto dto)
{
var person = await _context.Persons.FirstOrDefaultAsync(p => p.PersonCode == dto.PersonCode);
if (person == null) return NotFound("Person not found.");

var utcNow = DateTime.UtcNow;
var todayStart = utcNow.Date;
var tomorrowStart = todayStart.AddDays(1);

var alreadyChecked = await _context.AttendanceRecords
.AnyAsync(a => a.PersonId == person.Id && a.CheckInTime >= todayStart && a.CheckInTime < tomorrowStart);

if (alreadyChecked) return BadRequest("Already checked in today.");

var record = new AttendanceRecord
{
PersonId = person.Id,
Role = person.Role,
CheckInTime = utcNow,
Location = dto.Location,
Notes = dto.Notes
};

_context.AttendanceRecords.Add(record);
await _context.SaveChangesAsync();

return Ok(new { message = "Check-in successful", person.FullName, person.Role, record.CheckInTime });
}

[HttpGet("today")]
public async Task<IActionResult> GetToday()
{
var utcNow = DateTime.UtcNow;
var start = utcNow.Date;
var end = start.AddDays(1);

var records = await _context.AttendanceRecords
.Include(a => a.Person)
.Where(a => a.CheckInTime >= start && a.CheckInTime < end)
.Select(a => new {
a.Id,
PersonName = a.Person!.FullName,
a.Role,
a.CheckInTime,
a.Location,
a.Notes
})
.ToListAsync();

return Ok(records);
}
}
}
