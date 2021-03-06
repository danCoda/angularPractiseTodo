// Input, see info @35.58.
// EventEmitter, Output. See info @1.02.14.
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'; 
import {TodoService} from "../../services/todo.service";

import { Todo } from "../../models/Todos";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  // Set dynamic classes.
  setClasses() {
    let classes = {
      todo: true,
      "is-complete": this.todo.completed
    }
    return classes;
  }

  onToggle(todo:Todo) {
    // Toggle in UI.
    todo.completed = !todo.completed;
    // Toggle on server.
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo);
    })
  }

  onDelete(todo:Todo) { // See explaination @1.04.32.
    this.deleteTodo.emit(todo);
  }
}
