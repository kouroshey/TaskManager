import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUsers } from './all-users-page/all-users.component'
import { AddUser } from './add-user-page/add-user.component'
import { UsersPageRoutingModule } from './users-page-routing.module'
import { SharedModule } from 'src/app/shared/shared.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AllUsers,
    AddUser,
    EditProfileComponent
  ],
  imports: [CommonModule, UsersPageRoutingModule, SharedModule,]
})
export class UsersPageModule { }
