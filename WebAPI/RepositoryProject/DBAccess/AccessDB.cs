using Common;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositoryProject.DBAccess
{
    public class AccessDB : DbContext
    {
        public AccessDB() : base("dbConnection2015") { }

        public DbSet<Rides> Users { get; set; }
        public DbSet<User> Tickets { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Ticket>()
            //    .HasRequired<TicketOffice>(card => card.TicketOffice)
            //    .WithMany(to => to.Tickets);

            //modelBuilder.Entity<User>()
            //    .HasMany<Ticket>(u => u.Tickets)
            //    .WithOptional(t => t.User);
        }
    }
}
