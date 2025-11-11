import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule, NgIf],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Output() mesToPar = new EventEmitter();

  name: string = '';

  sendToParrent() {
    this.mesToPar.emit(this.name);
  }

  isVisible: boolean = false;
  todo!: string;
  toDoList: any[] = [
    {
      title: 'Випити кави',
    },
    {
      title: 'Випити чаю',
    },
    {
      title: "З'їсти печиво",
    },
  ];
  showed() {
    this.isVisible = !this.isVisible;
  }
  addItem() {
    if (!this.todo || this.todo.trim() === '') {
      return;
    }
    this.toDoList.push({ title: this.todo });
    this.todo = '';
  }
}
