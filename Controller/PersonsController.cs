using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NEW_QR_BASED_ATTENDANCE.Data;
using NEW_QR_BASED_ATTENDANCE.Models;

namespace NEW_QR_BASED_ATTENDANCE.Controllers
{
[ApiController]
[Route("api/[controller]")]
public class PersonsController : ControllerBase
{
private readonly AttendanceContext _context;

public PersonsController(AttendanceContext context)
{
_context = context;
}

[HttpGet]
public async Task<ActionResult<IEnumerable<Person>>> GetPersons()
{
return await _context.Persons.ToListAsync();
}

[HttpPost]
public async Task<ActionResult<Person>> AddPerson(Person person)
{
_context.Persons.Add(person);
await _context.SaveChangesAsync();
return CreatedAtAction(nameof(GetPersons), new { id = person.Id }, person);
}
}
}