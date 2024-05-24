﻿namespace TaskManager.Models
{
    public class Task
    {

        public enum Priority
        {
            Low,
            Medium,
            High
        }




        public int Id { get;  set; }
        public string Name { get;  set; }
        public string Description { get;  set; }
        public DateTime ExpireTaskTime { get;  set; }
        public Priority PrioritySet { get;  set; }


        public int UserId { get; set; }
        public User User { get;  set; }

        public int ProjectId { get; set; }
        public Project Project { get; set; }

        public Task(string name, string description, DateTime expireTaskTime, Priority prioritySet, int userId, int projectId)
        {
            Name = name;
            Description = description;
            ExpireTaskTime = expireTaskTime;
            PrioritySet = prioritySet;
            UserId = userId;
            ProjectId = projectId;
        }

        public void Edit(string name, string description, DateTime expireTaskTime, Priority prioritySet, int userId, int projectId)
        {
            Name = name;
            Description = description;
            ExpireTaskTime = expireTaskTime;
            PrioritySet = prioritySet;
            UserId = userId;
            ProjectId = projectId;
        }

    }
}