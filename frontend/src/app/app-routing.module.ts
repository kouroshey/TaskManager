import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContentComponent } from "./shared/components/layout/content/content.component";
import { FullComponent } from "./shared/components/layout/full/full.component";
import { full } from "./shared/routes/full.routes";
import { content } from "./shared/routes/routes";
import { LoginComponent } from "./auth/login/login.component";
import { LoginGuard } from "./shared/guard/login-guard";
import { RootResolver } from "./shared/resolvers/root.resolver"
import { GetDashboardInfoResolver } from "./shared/resolvers/dashboard-info.resolver"
import { AddUser } from "./components/users-page/add-user-page/add-user.component";
import { SignupComponent } from "./auth/signup/signup.component";

const routes: Routes = [
  {
    path: "",
    component: ContentComponent,
    children: content,
    // resolve: {
    //   masterInfo: RootResolver,
    //   dashboardInfo: GetDashboardInfoResolver
    // }
  },
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
  },
  {
    path: "",
    component: FullComponent,
    children: full,
  },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [
    [
      RouterModule.forRoot(routes, {
        anchorScrolling: "enabled",
        scrollPositionRestoration: "enabled",
      }),
    ],
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
