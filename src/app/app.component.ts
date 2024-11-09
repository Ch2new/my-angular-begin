import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { MaxMinMeterComponent } from './max-min-meter/max-min-meter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ActionBarComponent,MaxMinMeterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  doAppMinChange($event: any) {
    console.log('doAppMinChange : ', $event);
  }
  doAppMaxChange($event: any) {
   console.log('doAppMaxChange : ', $event);
  }
  title = 'my-angular-project';

  testClick() {
    console.log('test-Evenbinding');
  }

  testNumberChange(value: number) {
    console.log('test-Evenbinding : ', value);
  }
}
