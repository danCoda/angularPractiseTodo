import { Component, OnInit, Input } from '@angular/core'; // Input, see info @35.58.
import {TodoService} from "../../services/todo.service";

import { Todo } from "../../models/Todos";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

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

  onDelete(todo:Todo) {
    console.log("delete");
  }
}
