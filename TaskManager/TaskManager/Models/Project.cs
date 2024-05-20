namespace TaskManager.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string Name { get;  set; }
        public string Description { get;  set; }
        public DateTime StartTime { get;  set; }
        public DateTime EndTime { get;  set; }

        public ICollection<User> Users { get;  set; }
        public ICollection<Task> Tasks { get; set; }
        public ICollection<Chat> Chats { get; set; }

        public Project(string name, string description, DateTime startTime, DateTime endTime)
        {
            Name = name;
            Description = description;
            StartTime = startTime;
            EndTime = endTime;
        }

        public void Edit(string name, string description, DateTime startTime, DateTime endTime)
        {
            Name = name;
            Description = description;
            StartTime = startTime;
            EndTime = endTime;
        }
       
        
    }
}
