import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../guards/data.service';

@Component({
  selector: 'app-board-grid',
  templateUrl: './board-grid.component.html',
  styleUrls: ['./board-grid.component.scss']
})
export class BoardGridComponent implements OnInit {

  boardList: any;
  isLoading = false;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.boardList = this.route.snapshot.data.boards;
  }

  addNewBoard(newBoard) {
    this.isLoading = true;
    this.dataService.addBoard({
      board: newBoard
    }).subscribe((response: any) => {
      this.boardList = response.data;
      this.isLoading = false;
    });
  }

  deleteBoard(board) {
    this.dataService.deleteBoard({
      timestamp: board.timestamp
    }).subscribe((response: any) => {
      this.boardList = response.data;
      this.isLoading = false;
    });
  }
}
