import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  taskList = [
    { id: 1, title: 'تسک اول', done: false },
    { id: 2, title: 'تسک دوم', done: false },
    { id: 3, title: 'تسک سوم', done: true },
    { id: 4, title: 'تسک چهارم', done: false },
  ]

  onChange(id: number) {
    let selectedTask = this.taskList.find(item => item.id === id);
    if (selectedTask.done) {
      selectedTask.done = false
    } else {
      selectedTask.done = true
    }
  }
}
