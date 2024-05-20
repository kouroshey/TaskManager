using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using TaskManager.Models;
using TaskManager.Models.DataBaseContext;
using TaskManager.Models.Dto;

namespace TaskManager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DataBaseContext _context;



        public UserController(DataBaseContext context)
        {
            _context = context;
        }




        [HttpPost("create")]
        public IActionResult Create([FromForm] CreateUserDto model)
        {

            dynamic result = new JObject();

            if ( _context.Users.Any(x => x.UserName == model.UserName))
            {
                result.message = "نام کاربری وارد شده قبلا ثبت شده است .";
                result.success = false;
                return BadRequest(result);
            }

            var user = new User(model.UserName, model.Email, model.Password);

             _context.Users.Add(user);
             _context.SaveChanges();

            result.message = "کاربر با موفقیت ایجاد شد";
            result.success = true;

            return Ok(result);
        }






        [HttpPost("edit")]
        public IActionResult Edit([FromBody] EditUserDto model)
        {
            dynamic result = new JObject();

            if (model == null)
            {
                result.message = "لطفا فیلدهارا بصورت صحیح وارد کنید!";
                result.success = false;
                return BadRequest(result);
            }

            var existingUser = _context.Users.Find(model.Id);
            if (existingUser == null)
            {
                result.message = "کاربری یافت نشد !";
                result.success = false;
                return BadRequest(result);
            }

            existingUser.UserName = model.UserName;
            existingUser.Email = model.Email;
            existingUser.FirstName = model.FirstName;
            existingUser.LastName = model.LastName;
            existingUser.PhoneNumber = model.PhoneNumber;

            _context.SaveChanges();

            result.message = "کاربر مورد نظر با موفقیت ویرایش شد";
            result.success = true;
            
            return Ok($"{existingUser} " +
                $"{result}");
        }




        [HttpPost("delete/{id}")]
        public IActionResult Delete(int id)
        {
            dynamic result = new JObject();

            var existingUser = _context.Users.Find(id);
            if (existingUser == null)
            {
                result.message = "کاربری یافت نشد !";
                result.success = false;
                return NotFound(result);
            }

            _context.Users.Remove(existingUser);
            _context.SaveChanges();

            result.message = "کاربر مورد نظر با موفقیت حذف شد";
            result.success = true;

            return Ok(result);
        }




        [HttpGet("usersgetall")]
        public IActionResult GetTasks()
        {
            dynamic result = new JObject();

            try
            {
                var Users = JArray.FromObject(_context.Users.ToList());
                result.Users = Users;
                result.success = true;
                return Ok(result);
            }
            catch (Exception ex)
            {
                result.message = "خطا در بازیابی کارها: " + ex.Message;
                result.success = false;
                return BadRequest(result);
            }
        }

    }
}
