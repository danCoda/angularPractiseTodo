import { Component, OnInit, Input } from '@angular/core'; // Input, see info @35.58.
import { Todo } from "../../models/Todos";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

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
}
