import { Component, Input, OnInit } from "@angular/core";
import { Iuser } from "src/app/shared/model/user.model";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "app-my-account",
  templateUrl: "./my-account.component.html",
  styleUrls: ["./my-account.component.scss"],
})
export class MyAccountComponent implements OnInit {
  userInfo: Iuser = {
    avatar: '',
    lastName: 'mowri',
    firstName: 'Kourosh',
    permission: 'admin',
    userCode: 2154,
    userName: 'Kouroshey'
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
