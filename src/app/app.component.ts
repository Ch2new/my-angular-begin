import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { MaxMinMeterComponent } from './max-min-meter/max-min-meter.component';
import { SqaureFlexComponent } from "./sqaure-flex/sqaure-flex.component";
import { TestRequestModule } from './test-request/test-request.module';
import { FormsModule } from '@angular/forms';
import { ShoppingModule } from './shopping/shopping.module';

/* ---------------------------- primeNG Component --------------------------- */
/* -------------------------------------------------------------------------- */

// const NgModule = [
  
// ];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ActionBarComponent, 
    MaxMinMeterComponent, 
    SqaureFlexComponent, 
    CommonModule,
    TestRequestModule,
    FormsModule,
    ShoppingModule,
    // ...NgModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // แก้ styleUrl เป็น styleUrls
})

export class AppComponent {
  appCounter = 20;
  squareWidth = 400;
  squareHeight = 400;
  isActivate: boolean = false;

  value: string = '';

  customerList: string[] = [
    'customer1', 'customer2', 'customer3', 'customer4', 'customer5'
  ]
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

  pushCustomer() {
    let newCustomer = 'customer' + (this.customerList.length + 1) ;
    this.customerList.push(newCustomer);
  }

  unShiftCustomer() {
    let newCustomer = 'customer' + (this.customerList.length + 1) ;
    this.customerList.unshift(newCustomer);
  }

  removeCustomer(index: number) {
    this.customerList.splice(index, 1);
  }

  searchProduct(text:string) {
    console.log(text);
  }
}
