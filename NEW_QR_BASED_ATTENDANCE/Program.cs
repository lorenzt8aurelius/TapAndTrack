using Microsoft.EntityFrameworkCore;
using NEW_QR_BASED_ATTENDANCE.Data;

// --- 1. Create the Web Application Builder ---
var builder = WebApplication.CreateBuilder(args);

// --- 2. Configure Services ---
// This is the dependency injection container.
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        // For development, we allow any origin. In production, you should restrict
        // this to your actual frontend's domain (e.g., "https://mytapandtrack.com").
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Add services for API controllers.
builder.Services.AddControllers();

// Add services for Swagger/OpenAPI documentation and UI.
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure the database connection using the string from appsettings.json.
var connectionString = builder.Configuration.GetConnectionString("MySqlConn");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
});

// --- 3. Build the Application ---
var app = builder.Build();

// --- 4. Configure the HTTP Request Pipeline ---
// This defines how incoming requests are handled.
if (app.Environment.IsDevelopment())
{
    // In development mode, use Swagger for API testing and documentation.
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Redirect HTTP requests to HTTPS.
app.UseHttpsRedirection();

// Apply the CORS policy to allow cross-origin requests from the frontend.
app.UseCors("AllowFrontend");

// Enable authorization (we can add authentication middleware here later).
app.UseAuthorization();

// Map incoming requests to the appropriate controller actions.
app.MapControllers();

// --- 5. Run the Application ---
app.Run();
