import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartAppComponent } from './components/cart-app.component';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CartAppComponent],
  templateUrl: './app.component.html',
})
export class AppComponent{
  title = '3-cart-app';
}
