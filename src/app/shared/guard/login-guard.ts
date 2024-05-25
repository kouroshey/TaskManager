import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
    providedIn: "root",
})
export class LoginGuard implements CanActivate {
    constructor(public router: Router) { }

    canActivate(): boolean {
        let accessToken = localStorage.getItem("Token");
        if ('!accessToken || accessToken === null') {
            return true;
        } else {
            this.router.navigate([""]);
            return false;
        }
    }
}
