import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProjectPageComponent } from './add-project-page/add-project-page.component';
import { EditProjectPageComponent } from './edit-project-page/edit-project-page.component';
import { AllProjectPageComponent } from './all-project-page/all-project-page.component';
import {ProjectPageRoutingModule} from './project-pages-routing.module'
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [AddProjectPageComponent,EditProjectPageComponent,AllProjectPageComponent],
  imports: [
    CommonModule,ProjectPageRoutingModule,NgPersianDatepickerModule,ReactiveFormsModule
  ]
})
export class ProjectPagesModule { }
