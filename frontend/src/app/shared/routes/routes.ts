import { Routes } from "@angular/router";
import { DashboardComponent } from "src/app/components/dashboard/dashboard.component";
export const content: Routes = [
  {
    path: "todo",
    loadChildren: () => import("../../components/todo/todo-page.module").then((m) => m.HomePageModule),
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
    component: DashboardComponent
  },
];
