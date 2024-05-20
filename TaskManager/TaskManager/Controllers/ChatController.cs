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
    public class ChatController : ControllerBase
    {
        private readonly DataBaseContext _context;



        public ChatController(DataBaseContext context)
        {
            _context = context;
        }



        [HttpPost("create")]
        public IActionResult Create([FromForm] CreateChatDto chat)
        {
            dynamic result = new JObject();

            if (chat == null)
            {
                result.message = "پروژه بصورت نادرست وارد شده است!";
                result.success = false;
                return BadRequest(result);
            }

            var project = _context.Projects.Find(chat.ProjectId);
            if (project == null)
            {
                result.message = "پروژه یافت نشد!";
                result.success = false;
                return BadRequest(result);
            }

            var newChat = new Chat(chat.Text, chat.ProjectId);

            _context.Chats.Add(newChat);
            _context.SaveChanges();

            result.message = "نظر شما با موفقیت ایجاد شد";
            result.success = true;

            return Ok(result);
        }


    }
}
