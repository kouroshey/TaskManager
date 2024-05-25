import { Routes } from "@angular/router";
import { DashboardComponent } from "src/app/components/dashboard/dashboard.component";
export const content: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "projects",
    loadChildren: () => import("../../components/project-pages/project-pages.module").then((m) => m.ProjectPagesModule),
  }
  ,
  {
    path: "auth",
    loadChildren: () => import("../../auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "users",
    loadChildren: () => import("../../components/users-page/users-page.module").then((m) => m.UsersPageModule),
  },

  {
    path: "",
    component: DashboardComponent},{
    path: "projects",
    loadChildren: () => import("../../components/project-pages/project-pages.module").then((m) => m.ProjectPagesModule),
  },
  {path:"tasks",
  loadChildren:()=>import("../../components/task-pages/task-pages.module").then((m)=>m.TaskPagesModule)}

];
