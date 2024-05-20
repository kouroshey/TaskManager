import { RouterModule, Routes } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";


const routes: Routes = [
    {
        path: "auth",
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'signup',
                component: SignupComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ],
    exports: [RouterModule],
})

export class AuthRoutingModule { }