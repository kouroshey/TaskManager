import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddUser } from "./add-user-page/add-user.component"
import { AllUsers } from "./all-users-page/all-users.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: '',
        redirectTo: "all",
      },
      {
        path: 'all',
        component: AllUsers
      },
      {
        path: 'add',
        component: AddUser
      },
      {
        path: 'profile',
        component: EditProfileComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersPageRoutingModule { }
