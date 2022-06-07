import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Output() todoDelete:EventEmitter<Todo> = new EventEmitter()
  @Output() todoDone:EventEmitter<Todo> = new EventEmitter()
  @Output() todoUnDone:EventEmitter<Todo> = new EventEmitter()
  @Input()
  todo!: Todo;
  // onClick(){
  //   console.log("onClick has been triggered")
  // }
  onClick(todo:Todo){
    this.todoDelete.emit(todo);
  }
  onClick2(todo:Todo){
    this.todoDone.emit(todo);
  }
  onClick3(todo:Todo){
    this.todoUnDone.emit(todo);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
