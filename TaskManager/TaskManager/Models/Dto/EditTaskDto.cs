namespace TaskManager.Models.Dto
{
    public class EditTaskDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime ExpireTaskTime { get; set; }
        public EnumTaskPriority PrioritySet { get; set; }
    }
}
