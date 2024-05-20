using static TaskManager.Models.Task;

namespace TaskManager.Models.Dto
{
    public class GetAllTasks
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime ExpireTaskTime { get; set; }
        public Priority PrioritySet { get; set; }
    }
}
