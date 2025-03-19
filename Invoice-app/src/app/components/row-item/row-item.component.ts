import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Item } from '../../models/items';

@Component({
  selector: 'tr[row-item]',
  imports: [],
  templateUrl: './row-item.component.html',
 
})
export class RowItemComponent {
  @Input() item!: Item ;
  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();
  onRemove(id: number){
      this.removeEventEmitter.emit(id);
  }
}
