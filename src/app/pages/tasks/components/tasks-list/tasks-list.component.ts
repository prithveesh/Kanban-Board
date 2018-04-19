import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  @Input() list;

  constructor() { }

  ngOnInit() {
  }

  addNewTask(task) {
    this.list.push({
      name: task,
      status: false
    });
  }
}
