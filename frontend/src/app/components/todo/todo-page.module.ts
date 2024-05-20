import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomePageRoutingModule } from "./todo-page-routing.module";
import { FirstPageComponent } from "./projects/first-page.component";
import { TasksPageComponent } from "./tasks/tasks-page.component"
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [FirstPageComponent, TasksPageComponent],
  imports: [CommonModule, HomePageRoutingModule, SharedModule],
})
export class HomePageModule { }
