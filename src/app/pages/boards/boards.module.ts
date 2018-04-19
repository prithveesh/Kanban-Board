import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { BoardsRoutingModule } from './boards-routing.module';
import { BoardGridComponent } from './components/board-grid/board-grid.component';
import { BoardCardComponent } from './components/board-card/board-card.component';
import { BoardNewComponent } from './components/board-new/board-new.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BoardsRoutingModule
  ],
  declarations: [BoardGridComponent, BoardCardComponent, BoardNewComponent]
})
export class BoardsModule { }
