import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProjectPageComponent } from './add-project-page/add-project-page.component';
import { EditProjectPageComponent } from './edit-project-page/edit-project-page.component';
import { AllProjectPageComponent } from './all-project-page/all-project-page.component';
import { ProjectPageRoutingModule } from './project-pages-routing.module'
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';

import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ChatComponent } from './chat/chat.component';
import { TasksComponent } from './tasks/tasks.component';
import { ConversationComponent } from './conversation/conversation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [AddProjectPageComponent, EditProjectPageComponent, AllProjectPageComponent, ChatComponent, TasksComponent, ConversationComponent],
  imports: [CommonModule,
    ProjectPageRoutingModule,
    NgPersianDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDropdownModule,
    SharedModule
    
  ]
})
export class ProjectPagesModule { }
