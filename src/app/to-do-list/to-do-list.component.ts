import { Component, OnInit } from '@angular/core';
import { Todo } from "../models/todo";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor() { }

  title = 'Test App';

  todoValue:string;
  itemList : Todo[];

  ngOnInit(){
    this.itemList = [];
    this.todoValue = ""; 
  }

  addItem(){
    if(this.todoValue !== ""){
      const newItem :Todo = {
        id : Date.now(),
        value : this.todoValue,
        isDone : false
      };
      this.itemList.push(newItem);
    }
    this.todoValue = "";
  }

  deleteItem(id:number){
    this.itemList = this.itemList.filter(item => item.id !== id);
  }

}
