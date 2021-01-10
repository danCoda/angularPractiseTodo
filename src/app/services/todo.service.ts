import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos() {
    return [
      {
        id: 1,
        title: "Read book",
        completed: false
      },
      {
        id: 2,
        title: "Exercise",
        completed: true
      },
      {
        id: 3,
        title: "Go out",
        completed: false
      }
    ]
  }
}
