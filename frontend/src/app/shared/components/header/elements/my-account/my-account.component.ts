import { Component, Input, OnInit } from "@angular/core";
import { IUser } from "src/app/shared/model/user.model";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "app-my-account",
  templateUrl: "./my-account.component.html",
  styleUrls: ["./my-account.component.scss"],
})
export class MyAccountComponent implements OnInit {
  userInfo: IUser = {
    avatar: '',
    lastName: 'mowri',
    firstName: 'Kourosh',
    userName: 'Kouroshey',
    email: 'Kouroshmowri@gmai.com'
  }

  constructor(
    private authService: AuthService
  ) {
    if (JSON.parse(localStorage.getItem("user"))) {
    } else {
    }
  }

  ngOnInit() { }

  logoutFunc() {
    this.authService.logout()
  }
}
