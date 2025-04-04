import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../../models/items';
import { FormsModule, NgForm } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'from-item',
  imports: [FormsModule],
  templateUrl: './from-item.component.html',
})
export class FromItemComponent {

  @Output() addItemEventEmitter = new EventEmitter();

  private counterId =4;
  
  item : any= {
    product: '',
    price: '',
    quantity: ''
  }
  
  onSubtim(itemForm:NgForm):void {
    if(itemForm.valid){
    this.addItemEventEmitter.emit({id: this.counterId, ... this.item});
    this.counterId++;
    this.item = {
      product: '',
      price: '',
      quantity: ''
    }
    itemForm.reset();
    itemForm.resetForm();
  }
   
  }




}
