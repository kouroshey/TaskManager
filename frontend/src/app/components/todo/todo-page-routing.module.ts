import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstPageComponent } from "./projects/first-page.component";
import { TasksPageComponent } from "./tasks/tasks-page.component"

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "projects",
        component: FirstPageComponent,
      },
      {
        path: "tasks",
        component: TasksPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
