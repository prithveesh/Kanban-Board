import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardGridComponent } from './components/board-grid/board-grid.component';
import { DataService } from './guards/data.service';

const routes: Routes = [{
  path: '',
  resolve: {
    boards: DataService
  },
  component: BoardGridComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DataService]
})
export class BoardsRoutingModule { }
