import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllTaskPageComponent } from "./all-task-page/all-task-page.component";

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
                component: AllTaskPageComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TaskPageRoutingModule { }
