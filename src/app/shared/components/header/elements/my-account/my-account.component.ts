import { Component, Input, OnInit } from "@angular/core";
import { IUser } from "src/app/shared/model/user.model";
import { AuthService } from "src/app/shared/services/auth.service";
import { UsersService } from "src/app/shared/services/users.service";

@Component({
  selector: "app-my-account",
  templateUrl: "./my-account.component.html",
  styleUrls: ["./my-account.component.scss"],
})
export class MyAccountComponent implements OnInit {
  userInfo: IUser

  constructor(
    private authService: AuthService,
    private userService:UsersService
  ) {
    if (JSON.parse(localStorage.getItem("user"))) {
    } else {
    }
  }

  ngOnInit() {

    this.userService.getMaster().subscribe(res=>this.userInfo=res)
   }

  logoutFunc() {
    this.authService.logout()
  }
}
