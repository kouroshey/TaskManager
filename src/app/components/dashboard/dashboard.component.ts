import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {


  tasks = [
    'تسک اول',
    'تسک دوم',
    'تسک سوم',
  ]
}
