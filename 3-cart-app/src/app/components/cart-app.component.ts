import { Component, OnInit, Output } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { CatalogComponent } from './catalog/catalog.component';
import { CartItem } from '../models/cartItme';
import { CartComponent } from "./cart/cart.component";

@Component({
  selector: 'cart-app',
  imports: [CatalogComponent, CartAppComponent, CartComponent],
  templateUrl: './cart-app.component.html',
})
export class CartAppComponent implements OnInit{
  
  products: Product [] = []; 
  items : CartItem[] = [];

  constructor(private service: ProductService){

  }

  ngOnInit(): void {
   this.products = this.service.finAll();
  }

  onAddCart(product: Product){
    const hasItem = this.items.find(item =>{
      return item.product.id === product.id;
    })
    if(hasItem){
      this.items = this.items.map(item =>{
        if(item.product.id === product.id){
          return {
            ... item, quantity: item.quantity + 1
          }
        }
        return item;
      } )

    }else{
      this.items = [... this.items, {product: {... product}, quantity: 1}];
    }
  }


  onDeleteCart(id: number): void{
    this.items = this.items.filter( item => item.product.id !== id);

  }



}
