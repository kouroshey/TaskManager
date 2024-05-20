import { Routes } from "@angular/router";
export const content: Routes = [
  {
    path: "simple-page",
    loadChildren: () => import("../../components/simple-page/simple-page.module").then((m) => m.SimplePageModule,
    ),
  },
  {
    path: "single-page",
    loadChildren: () => import("../../components/single-page/single-page.module").then((m) => m.SinglePageModule),
  },
  {
    path: "users",
    loadChildren: () => import("../../components/users-page/users-page.module").then((m) => m.UsersPageModule),
  },
  {
    path: "projects",
    loadChildren: () => import("../../components/project-pages/project-pages.module").then((m) => m.ProjectPagesModule),
  },
];
