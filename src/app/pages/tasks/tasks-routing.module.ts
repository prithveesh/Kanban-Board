import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksGridComponent } from './components/tasks-grid/tasks-grid.component';

const routes: Routes = [{
  path: ':id',
  component: TasksGridComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
