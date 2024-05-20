using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using TaskManager.Models;

namespace TaskManager.Mapping
{
    public class ChatMapping : IEntityTypeConfiguration<Chat>
    {

        public void Configure(EntityTypeBuilder<Chat> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Text).IsRequired().HasMaxLength(300);

        }
    }
}