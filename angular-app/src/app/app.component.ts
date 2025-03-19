import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CounterComponent} from './counter/counter.component';
import { parse } from 'path';

@Component({
  selector: 'app-root',
  imports: [ CounterComponent, RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  title: String = 'Hola mundo angular desde componente';
  
  subTitle: String = 'Contador con estado de session';

   users: String[] = ['Pepe','Maria','Juan','Andres'];
  
   // users!: String[]; ctrl +k+c -> eso para comentar rapido
  visible: boolean = false;

    counter: number = 0 ;


      ngOnInit(): void {
        this.counter = parseInt(sessionStorage.getItem('counter')!) || 0;
          
      }

  setVisible(): void{
    this.visible = this.visible? false : true;
    console.log("hemos hecho clic en setVisible");
  }

  setCounter(event: number): void{
      this.counter = event;
  }

}
