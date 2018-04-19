import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss']
})
export class BoardCardComponent implements OnInit {

  @Input() board: string;
  @Output() deleteBoard = new EventEmitter<{}>();


  constructor() { }

  ngOnInit() {
    console.log(this.board);
  }

  openBoard() {

  }
}
