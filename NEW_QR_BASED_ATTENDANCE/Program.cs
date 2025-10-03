using Microsoft.EntityFrameworkCore;
using NEW_QR_BASED_ATTENDANCE.Data;

var builder = WebApplication.CreateBuilder(args);

// Load connection string
var connectionString = builder.Configuration.GetConnectionString("MySqlConn");

// Register DbContext
builder.Services.AddDbContext<AttendanceContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

// Add services
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// CORS (for development, allow all)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

var app = builder.Build();

// Middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowAll");
app.UseAuthorization();
app.MapControllers();
app.Run();

internal class AttendanceContext
{
}