import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos : Todo[]
  constructor() {
    const localItem= localStorage.getItem("todos");
    if(localItem===null){
      this.todos = [];
    }else{
      this.todos = JSON.parse(localItem)
    }

  }

  ngOnInit(): void {
  }
  todoDelete(todo:Todo){
     console.log(todo);
     const index = this.todos.indexOf(todo);
     this.todos.splice(index, 1)
     localStorage.setItem("todos", JSON.stringify(this.todos))
  }

   todoAdd(todo:Todo){
     this.todos.push(todo);
     localStorage.setItem("todos", JSON.stringify(this.todos))
  }

   todoDone(todo:Todo){
     todo.active = false
     localStorage.setItem("todos", JSON.stringify(this.todos))
  }

   todoUnDone(todo:Todo){
     todo.active = true
     localStorage.setItem("todos", JSON.stringify(this.todos))
  }
}
