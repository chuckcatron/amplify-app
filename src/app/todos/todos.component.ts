import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  todo: Todo = {
    id: 1,
    description: "Go to Sam's Club",
    status: "Not done"
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
