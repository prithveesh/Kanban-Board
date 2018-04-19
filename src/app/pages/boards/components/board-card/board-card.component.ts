import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss']
})
export class BoardCardComponent implements OnInit {

  @Input() board: {
    name: string,
    timestamp: string
  };
  @Output() deleteBoard = new EventEmitter<{}>();


  constructor(private router: Router) { }

  ngOnInit() {
  }

  openBoard() {
    const url = this.board.name.replace(/ /g, '-');
    this.router.navigate([`/tasks/${url}`]);
  }
}
