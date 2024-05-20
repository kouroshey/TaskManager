using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TaskManager.Models;

namespace TaskManager.Mapping
{
    public class UserMapping : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasKey(x => x.Id);


            builder.Property(x => x.UserName).HasMaxLength(30).IsRequired();
            builder.Property(x => x.Email).HasMaxLength(50);
            builder.Property(x => x.Password).HasMaxLength(50).IsRequired();
            builder.Property(x=> x.FirstName).HasMaxLength(50);
            builder.Property(x=> x.LastName).HasMaxLength(50);
            builder.Property(x=>x.PhoneNumber).HasMaxLength(50);
        }
    }
}
