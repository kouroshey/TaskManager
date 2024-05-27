import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/model/user.model';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  public user:IUser;

  constructor(private userService:UsersService){

  }

  ngOnInit(): void {
    this.userService.getMaster().subscribe(res=>this.user=res)
  }



  tasks = [
    'تسک اول',
    'تسک دوم',
    'تسک سوم',
  ]





}
