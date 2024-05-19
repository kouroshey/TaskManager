import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { FirstPageComponent } from "./projects/first-page.component";
import { SecondPageComponent } from "./tasks/second-page.component";


@NgModule({
  declarations: [FirstPageComponent, SecondPageComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class SimplePageModule { }
