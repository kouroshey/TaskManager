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
    public class CommentController : ControllerBase
    {

        private readonly DataBaseContext _context;



        public CommentController(DataBaseContext context)
        {
            _context = context;
        }



        [HttpPost("create")]
        public IActionResult Create([FromForm]CreateCommentDto comment)
        {
            dynamic result = new JObject();

            if (comment == null)
            {
                result.message = "مدل نادرست است!";
                result.success = false;
                return BadRequest(result);
            }

            var newComment = new Comment(comment.Title, comment.Text);

            _context.Comments.Add(newComment);
            _context.SaveChanges();

            result.message = "نظر شما با موفقیت ایجاد شد";
            result.success = true;

            return Ok(result);
        }







        [HttpDelete("delete/{id}")]
        public IActionResult Delete(int id)
        {
            dynamic result = new JObject();

            var comment = _context.Comments.Find(id);

            if (comment == null)
            {
                result.message = "نظر یافت نشد!";
                result.success = false;
                return NotFound(result);
            }

            _context.Comments.Remove(comment);
            _context.SaveChanges();

            result.message = "نظر با موفقیت حذف شد";
            result.success = true;

            return Ok(result);
        }
    }
}

