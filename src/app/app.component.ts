import { Component, OnInit } from '@angular/core';
import { Todo } from './models/todo';
import { TodosService } from './services/todos/todos.service';
import { StorageService } from './services/localStorage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [TodosService]
})

export class AppComponent implements OnInit {
  constructor(private TodosService: TodosService,private storageService: StorageService) {
  }
  title = 'todo';
   todos: Todo[];

   addTask(newTask:Todo){
    this.todos.push(newTask);
    this.storageService.saveTasks(this.todos);

    
  }

  ngOnInit() {
   this.TodosService.getData().subscribe(data => {
     this.todos = data
   })
  }

  

}