﻿namespace TaskManager.Models.Dto
{
    public class CreateCommentDto
    {
        /// <summary>
        ///عنوان نظر
        /// </summary> 
        public string Title { get; set; }
        /// <summary>
        ///متن نظر
        /// </summary> 
        public string Text { get; set; }

    }
}