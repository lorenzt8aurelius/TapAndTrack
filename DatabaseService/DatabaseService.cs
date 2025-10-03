using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;

namespace QRAttendanceAPI.Services
{
    public class DatabaseService
    {
        private readonly string? _connectionString;

        public DatabaseService(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("MySqlConn");
        }

        public MySqlConnection GetConnection()
        {
            return new MySqlConnection(_connectionString);
        }
    }
}
