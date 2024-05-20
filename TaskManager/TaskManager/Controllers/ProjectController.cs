using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using TaskManager.Models;
using TaskManager.Models.DataBaseContext;
using TaskManager.Models.Dto;

namespace TaskManager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {

        private readonly DataBaseContext _context;



        public ProjectController(DataBaseContext context)
        {
            _context = context;
        }






        [HttpPost("create")]
        public IActionResult Create(CreateProjectDto project)
        {
            dynamic result = new JObject();

            var Project = new Project(project.Name,project.Description,project.StartTime,project.EndTime);
            _context.Projects.Add(Project);
            _context.SaveChanges();

            result.message = "پروژه با موفقیت ایجاد شد";
            result.success = true;

            return Ok(result);
        }







        [HttpPost("delete/{id}")]
        public IActionResult edit(int id) 
        {
            dynamic result = new JObject();

            var existingProject = _context.Projects.Find(id);
            if (existingProject == null)
            {
                result.message = " پروژه پیدا نشد ! ";
                result.success = false;
                return NotFound(result);
            }

            _context.Projects.Remove(existingProject);
            _context.SaveChanges();

            result.message = "پروژه با موفقیت حذف شد";
            result.success = true;

            return Ok(result);
        }






        [HttpPost("edit")]
        public IActionResult Edit([FromBody] EditProjectDto project)
        {
            dynamic result = new JObject();

            if (project == null)
            {
                result.message = "پروژه ای وارد نکردید!";
                result.success = false;
                return BadRequest(result);
            }

            var existingProject = _context.Projects.Find(project.Id);
            if (existingProject == null)
            {
                result.message = "پروژه یافت نشد !";
                result.success = false;
                return BadRequest(result);
            }

            // بروزرسانی خصوصیات کاربر
            existingProject.Name = project.Name;
            existingProject.Description = project.Description;
            existingProject.StartTime = project.StartTime;
            existingProject.EndTime = project.EndTime;
            

            _context.SaveChanges();

            result.message = "پروژه مورد نظر با موفقیت ویرایش شد";
            result.success = true;

            return Ok($"{existingProject} " +
                $"{result}");
        }





        [HttpGet("getallprojects")]
        public IActionResult GetTasks()
        {
            dynamic result = new JObject();

            try
            {
                var projects = JArray.FromObject(_context.Projects.Select(t => new GetAllProjectsDto
                {

                    Name = t.Name,
                    Description = t.Description,
                    EndTime = t.EndTime,
                    StartTime = t.StartTime
                }).ToList());

                result.Projects = projects;
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
