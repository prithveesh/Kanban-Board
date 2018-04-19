import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-grid',
  templateUrl: './tasks-grid.component.html',
  styleUrls: ['./tasks-grid.component.scss']
})
export class TasksGridComponent implements OnInit {

  tasks = [{
    name: 'list 1',
    list: [{
      name: 'first task',
      status: false
    }]
  }, {
    name: 'list 2',
    list: [{
      name: '2nd task',
      status: true
    }]
  }, {
    name: 'list 3',
    list: [{
      name: '2nd task',
      status: true
    }]
  }];
  constructor() { }

  ngOnInit() {
  }

}
