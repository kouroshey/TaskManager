import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProjectPageComponent } from './add-project-page/add-project-page.component';
import { EditProjectPageComponent } from './edit-project-page/edit-project-page.component';
import { AllProjectPageComponent } from './all-project-page/all-project-page.component';
import { ProjectPageRoutingModule } from './project-pages-routing.module'
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ChatComponent } from './chat/chat.component';
import { TasksComponent } from './tasks/tasks.component';
import { ConversationComponent } from './conversation/conversation.component';



@NgModule({
  declarations: [AddProjectPageComponent, EditProjectPageComponent, AllProjectPageComponent, ChatComponent, TasksComponent, ConversationComponent],
  imports: [CommonModule,
    ProjectPageRoutingModule,
    NgPersianDatepickerModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProjectPagesModule { }
