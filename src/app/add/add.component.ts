
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Todo} from '../models/todo';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Output() taskEvent  = new EventEmitter

  newTask:Todo = new Todo();

  constructor() { }

  ngOnInit(): void {
  }

  submitTask(){
    this.taskEvent.emit(this.newTask);

  }

}
