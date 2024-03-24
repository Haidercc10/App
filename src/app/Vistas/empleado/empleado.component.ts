import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

 pallets : any = [];
 copyPallets : any = [];
 data : any = [];
 palletsSeleccionados : any = [];

  ngOnInit(): void {
    this.cargarPallets();
    this.filtrarPallets();
    this.cargarRollosPallets();
  }

  cargarPallets(){
    //this.pallets = [];
    //this.pallets.push(
      this.data = [
       { 'pallet' : 0, 'cliente' : 'Hielo B/quilla', 'item' : 101, 'rollo' : 6871, 'ref' : 'Bolsa 1', 'cant' : 1000, 'unidad' : 'Und', 'proceso' : 'SELLA', 'rollos' : [] },
       { 'pallet' : 0, 'cliente' : 'Hielo B/quilla', 'item' : 101, 'rollo' : 6872, 'ref' : 'Bolsa 1', 'cant' : 1000, 'unidad' : 'Und', 'proceso' : 'SELLA', 'rollos' : [] },
       { 'pallet' : 88, 'cliente' : 'Hielo B/quilla', 'item' : 101, 'rollo' : 6873, 'ref' : 'Bolsa 1', 'cant' : 1000, 'unidad' : 'Und', 'proceso' : 'SELLA', 'rollos' : [] },
       { 'pallet' : 88, 'cliente' : 'Hielo B/quilla', 'item' : 101, 'rollo' : 6874, 'ref' : 'Bolsa 1', 'cant' : 1000, 'unidad' : 'Und', 'proceso' : 'SELLA', 'rollos' : [] },
       { 'pallet' : 89, 'cliente' : 'Hielo B/quilla', 'item' : 101, 'rollo' : 6875, 'ref' : 'Bolsa 1', 'cant' : 1000, 'unidad' : 'Und', 'proceso' : 'SELLA', 'rollos' : [] },
       { 'pallet' : 89, 'cliente' : 'Hielo B/quilla', 'item' : 101, 'rollo' : 6876, 'ref' : 'Bolsa 1', 'cant' : 1000, 'unidad' : 'Und', 'proceso' : 'SELLA', 'rollos' : [] },
    //)]
      ];
  }

  filtrarPallets(){
    this.pallets = this.data.reduce((a: any, b: any) => {
      if(!a.map((x: { pallet: any; }) => x.pallet).includes(b.pallet)) a = [...a, b];
      return a;
    }, []);
  }

  cargarRollosPallets(){
    this.data.forEach((a: any) => {
      let index = this.pallets.findIndex((b: { pallet: any; }) => b.pallet == a.pallet);
      console.log(index)
      this.pallets[index].rollos.push(a);
    });
  }

  cantidadPallet = (pallet : number) => this.data.filter((x: { pallet: any; }) => x.pallet == pallet).reduce((a: any, b: { cant: any; }) => a + b.cant, 0)

  createPDF(){
    let dd = {
      content: [
        'First paragraph',
        'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
      ]
    }
    console.log(dd)
  }
}
