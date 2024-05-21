import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllProjectPageComponent } from "./all-project-page/all-project-page.component";
import { AddProjectPageComponent } from "./add-project-page/add-project-page.component";
import { EditProjectPageComponent } from "./edit-project-page/edit-project-page.component";
import { ChatComponent } from "./chat/chat.component";


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
        component: AllProjectPageComponent
      },
      {
        path: 'add',
        component: AddProjectPageComponent
      },
      {
        path: 'edit',
        component: EditProjectPageComponent
      },
      {
        path: 'chat/:id',
        component: ChatComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectPageRoutingModule { }
