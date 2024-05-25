import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllTaskPageComponent } from "./all-task-page/all-task-page.component";
import { SharedModule } from "../../shared/shared.module";
import { TaskPageRoutingModule } from "./task-pages-routing.module";



@NgModule({
  declarations: [AllTaskPageComponent],
  imports: [
    CommonModule, SharedModule, TaskPageRoutingModule, SharedModule
  ]
})
export class TaskPagesModule { }
