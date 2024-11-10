import { Component, EventEmitter, Output } from '@angular/core';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-shopping-search',
  templateUrl: './shopping-search.component.html',
  styleUrl: './shopping-search.component.scss'
})
export class ShoppingSearchComponent {
  value: string | undefined;
  @Output() onInput = new EventEmitter<string>();
  @Output() onSearch = this.onInput.pipe(debounceTime(400));
 
  inputChange(value: string) {
    this.value = value;
    this.onInput.emit(this.value);
  }

}
