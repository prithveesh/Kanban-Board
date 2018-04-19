import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'boards',
    loadChildren: 'app/pages/boards/boards.module#BoardsModule',
  },
  {
    path: 'tasks',
    loadChildren: 'app/pages/tasks/tasks.module#TasksModule',
  },
  { path: '', redirectTo: '/boards', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
