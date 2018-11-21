import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  addTodo(inputRef: HTMLInputElement): void {
    console.log(inputRef.value);
    inputRef.value = '';
  }
}
