import { Component, OnInit,Input,EventEmitter, Output } from '@angular/core';
import {Todo} from 'src/app/ToDo'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo={sno:0,title:'',desc:'',active:true};
  @Output() todoDelete: EventEmitter<Todo> =new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  OnClick(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("onclick has been clicked")
  }

}
