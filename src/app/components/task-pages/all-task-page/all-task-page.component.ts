import { getLocaleMonthNames } from '@angular/common';
import { Component } from '@angular/core';
import * as data from '../../../shared/data/tasks'

@Component({
  selector: 'app-all-task-page',
  templateUrl: './all-task-page.component.html',
  styleUrl: './all-task-page.component.scss'
})
export class AllTaskPageComponent {
  public d = new Date();
  public myDate = `${this.d.getDate()} ${getLocaleMonthNames[this.d.getMonth() - 1]?.slice(0, 3)}`;
  public text: string = "";
  public todos = data.task;
  public completed: boolean = false;
  public red_border: boolean = false;
  public visible: boolean = false;
  public objToAdd: object = {
    text: "",
    objToAdd: "",
    Date: this.myDate,
    completed: "",
    badgeClass: "",
  };

  constructor() { }

  ngOnInit() { }

  public addTask(text: any) {
    let someData = {
      text: text,
    };
    this.todos.push(text);
  }

  public taskCompleted(task: any) {
    task.completed = !task.completed;
  }

  public taskDeleted(index: any) {
    this.todos.splice(index, 1);
  }

  public markAllAction(action: any) {
    this.todos.filter((task) => {
      task.completed = action;
    });
    this.completed = action;
  }
}
