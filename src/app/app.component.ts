import { Component, OnInit } from '@angular/core';
import { ServicioPruebaService } from './Servicios/servicio-prueba.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'App';
  nro1 : number = 0;
  nro5 : number = 0;
  nro10 : number = 0;

  constructor(private servicioPrueba : ServicioPruebaService){

  }

  mostrarFecha() {
    console.log(Date());
  }

  ngOnInit(): void {
    this.mostrarCantidades();
  }

  mostrarCantidades(){
    this.nro1 = 0;
    this.nro5 = 0;
    this.nro10 = 0;

    this.servicioPrueba.getPosts().subscribe(data => { 
      for (let index = 0; index < 40; index++) {
        if(data[index].userId == 1) this.nro1 += 1;  
        if(data[index].userId == 5) this.nro5 += 1;  
        if(data[index].userId == 10) this.nro10 += 1;  
      }
      console.log(this.nro1);
      console.log(this.nro5);
      console.log(this.nro10);
    });
  }
}

