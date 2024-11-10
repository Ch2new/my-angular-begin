import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingSearchComponent } from './shopping-search/shopping-search.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ShoppingCartComponent, ShoppingSearchComponent],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule
  ],
  exports: [ShoppingCartComponent, ShoppingSearchComponent]
})
export class ShoppingModule { }
