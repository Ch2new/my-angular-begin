import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-action-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.scss'
})
export class ActionBarComponent {
  @Input() counter: number = 0;
  @Input() step: number = 1;
  @Output() counterChange = new EventEmitter();
  @Input() inputDisplay: boolean = true;

  decrease() {
    if(this.counter - this.step >= 0) {
      this.counter = this.counter - this.step;
      this.counterChange.emit(this.counter);
    }
  }

  increase() {
    if(this.counter + this.step <= 100) {
      this.counter = this.counter + this.step;
      this.counterChange.emit(this.counter);
    }
  }
}
