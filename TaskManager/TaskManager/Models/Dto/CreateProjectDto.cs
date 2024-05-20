namespace TaskManager.Models.Dto
{
    public class CreateProjectDto
    {
        public string Name { get;  set; }
        public string Description { get;  set; }
        public DateTime StartTime { get;  set; }
        public DateTime EndTime { get;  set; }
    }
}
