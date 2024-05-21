namespace TaskManager.Models.Entity
{
    public class Comment
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;

        public ICollection<User> Users { get; set; }

        public Comment(string title, string text)
        {
            Title = title;
            Text = text;
        }
    }
}
