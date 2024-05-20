using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using TaskManager.Models.DataBaseContext;
using TaskManager.Models.Dto;

namespace TaskManager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly DataBaseContext _context;



        public TaskController(DataBaseContext context)
        {
            _context = context;
        }




        [HttpPost("create")]
        public IActionResult Create([FromBody] CreateTaskDto task)
        {
            dynamic result = new JObject();

           

            if (task == null)
            {
                result.message = "مدل نادرست است!";
                result.success = false;
                return BadRequest(result);
            }

           

            var newTask = new Models.Task(task.Name, task.Description, task.ExpireTaskTime, task.PrioritySet,task.UserId,task.ProjectId);


           
            _context.Tasks.Add(newTask);
            _context.SaveChanges();

            result.message = "وظیفه با موفقیت ایجاد شد";
            result.success = true;

            return Ok(result);
        }



        [HttpGet("tasks")]
        public IActionResult GetTasks()
        {
            dynamic result = new JObject();

            try
            {
                var tasks =JArray.FromObject( _context.Tasks.Select(t => new GetAllTasks
                {
                    
                    Name = t.Name,
                    Description = t.Description,
                    ExpireTaskTime = t.ExpireTaskTime,
                    PrioritySet = t.PrioritySet
                    }).ToList());

                result.alltasks = tasks;
                result.success = true;
                return Ok(result);
            }
            catch (Exception ex)
            {
                result.message = "خطا در بازیابی وظایف: " + ex.Message;
                result.success = false;
                return BadRequest(result);
            }
        }

    }
}
