import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Output() mesToPar = new EventEmitter();

  name: string = '';

  sendToParrent() {
    this.mesToPar.emit(this.name);
  }
}
