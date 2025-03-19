import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'div[product-card]',
  imports: [],
  templateUrl: './product-card.component.html',

})
export class ProductCardComponent {
  @Input() product!: Product;

}
