import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TodosService {

  constructor(private http: HttpClient) { }

  // 1h pour faire un map...
  getData():Observable <Todo[]> {
    console.log('coucou');
    return this.http.get<Todo[]>("https://jsonplaceholder.typicode.com/todos/")
      .pipe(
        map(
          response =>
            response as Todo[]
          )
        )
  }

}
