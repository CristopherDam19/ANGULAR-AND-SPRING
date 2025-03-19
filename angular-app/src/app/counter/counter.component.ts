import { Component, Input,EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
})
export class CounterComponent implements OnInit {
  
    counter: number = 0;

    @Input() title!:String;//para obtener datos del padre

    @Output() counterEmmit: EventEmitter<number> = new EventEmitter();

    ngOnInit(): void {
        this.counter  = parseInt(sessionStorage.getItem('counter')!) || 0;    
        console.log('creando componente');
    }


      //Se trabaja con local o session  -> local es mas persistente 
  setCounter(): void{
    this.counter = this.counter + 1;
    sessionStorage.setItem('counter', this.counter.toString());
    this.counterEmmit.emit(this.counter);
  }

}
