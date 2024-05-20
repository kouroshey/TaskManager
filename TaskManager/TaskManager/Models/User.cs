namespace TaskManager.Models
{
    public class User
    {
        public int Id { get;  set; }
        public string UserName { get;  set; }
        public string Email { get;  set; }
        public string? Password { get;  set; }
        public string? FirstName { get;  set; }
        public string? LastName { get;  set; }
        public string? PhoneNumber { get;  set; }



        public Task Task { get;  set; }

        public ICollection<Comment> Comments { get;  set; }
        public ICollection<Project> Projects { get;  set; }
        public ICollection<Chat> Chats { get;  set; }

        public User(string userName, string email, string password)
        {
            UserName = userName;
            Email = email;
            Password = password;
        }

        public void Edit(string firstName, string lastName, string email, string phoneNumber)
        {
            FirstName = firstName;
            LastName = lastName;
            Email = email;
            PhoneNumber = phoneNumber;
        }

        public void ChangePassword(string password)
        {
            Password = password;
        }
    }

}
