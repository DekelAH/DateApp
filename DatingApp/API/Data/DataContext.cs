using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        #region Constructors

        public DataContext(DbContextOptions options): base(options)
        {

        }

        #endregion

        #region Properties

        public DbSet<AppUser> Users { get; set; }

        #endregion
    }
}
