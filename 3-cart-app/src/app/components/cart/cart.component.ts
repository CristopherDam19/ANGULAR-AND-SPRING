import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItme';

@Component({
  selector: 'cart',
  imports: [],
  templateUrl: './cart.component.html',
})
export class CartComponent {

   @Input() items: CartItem[] = []; 

   @Output() idProduct  = new EventEmitter();
   
   onDeleteCart(id: number){
    this.idProduct.emit(id);
   }

}
