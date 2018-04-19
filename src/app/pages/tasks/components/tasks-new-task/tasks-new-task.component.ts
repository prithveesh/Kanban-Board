import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tasks-new-task',
  templateUrl: './tasks-new-task.component.html',
  styleUrls: ['./tasks-new-task.component.scss']
})
export class TasksNewTaskComponent implements OnInit {
  @ViewChild('taskForm') form: ElementRef;
  @Output() addNewTask = new EventEmitter<string>();

  newTask: string;

  constructor() { }

  ngOnInit() {
  }

  reset() {
    this.form.nativeElement.reset();
  }

  onSubmit() {
    this.addNewTask.emit(this.newTask);
    this.reset();
  }

}
