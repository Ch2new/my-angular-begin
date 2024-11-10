import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sqaure-flex',
  standalone: true,
  imports: [],
  templateUrl: './sqaure-flex.component.html',
  styleUrl: './sqaure-flex.component.scss'
})
export class SqaureFlexComponent {
  @Input() divWidth = 200;
  @Input() divHigh = 200;
}
