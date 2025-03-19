import { Component, Input, OnInit} from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-catalog',
  imports: [ProductCardComponent],
  templateUrl: './catalog.component.html',

})
export class CatalogComponent {
  
 
  @Input() products!: Product[];


}
