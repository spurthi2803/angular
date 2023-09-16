import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {
  @Input() childData: any;
  @Output() dataChanged = new EventEmitter<any>();

  updateData() {
    const updatedData = { hero: "Siddharth", age: 44 };
    this.dataChanged.emit(updatedData);
  }

}

