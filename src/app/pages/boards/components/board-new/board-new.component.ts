import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-board-new',
  templateUrl: './board-new.component.html',
  styleUrls: ['./board-new.component.scss']
})
export class BoardNewComponent implements OnInit {
  @ViewChild('boardForm') form: ElementRef;
  @Output() boardCreate = new EventEmitter<{}>();
  @Input() isLoading: boolean;

  constructor() { }

  isNew = true;
  newBoard: string;

  ngOnInit() {
  }

  enter() {
    this.isNew = false;
  }

  cancel() {
    this.isNew = true;
    this.form.nativeElement.reset();
  }

  createNew(event) {
    this.boardCreate.emit(this.newBoard);
    this.cancel();
  }
}
