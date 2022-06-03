import { Injectable } from '@angular/core';
import { Todo
 } from 'src/app/models/todo';
 
 @Injectable({
  providedIn: 'root'
})

// est ce qu'uun service peut être appelé independemment d'un contexte ou d'un composant ?
// ex : lambda serverless / tache cron sur un serveur
export class StorageService {

  constructor() { }

   saveTasks(todos:Todo[]){
    localStorage.setItem('todos', JSON.stringify(todos));
   }

    getTasks():Todo[]{
      const todos = JSON.parse( localStorage.getItem('todos') !);
      // je préfère ce genre de conditions x)))
      return todos !== null ? todos : null
/*       if(todos !== null){
        return todos;
      }
      else{
        return [];
      } */
    }


  }

