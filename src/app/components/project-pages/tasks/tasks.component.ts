import { Component } from '@angular/core';
const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
import * as data from "../../../shared/data/tasks";

export interface Task {
  text: string;
  completed: boolean;
}
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  public d = new Date();
  public myDate = `${this.d.getDate()} ${Months[this.d.getMonth() - 1]?.slice(0, 3)}`;
  public text: string = "";
  public todos = data.task;
  public completed: boolean = false;
  public red_border: boolean = false;
  public visible: boolean = false;
  public isOpen: boolean = false;

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
