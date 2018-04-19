import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksGridComponent } from './components/tasks-grid/tasks-grid.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TasksItemComponent } from './components/tasks-item/tasks-item.component';
import { TasksNewListComponent } from './components/tasks-new-list/tasks-new-list.component';
import { TasksNewTaskComponent } from './components/tasks-new-task/tasks-new-task.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    TasksRoutingModule
  ],
  declarations: [TasksGridComponent, TasksListComponent, TasksItemComponent, TasksNewListComponent, TasksNewTaskComponent]
})
export class TasksModule { }
