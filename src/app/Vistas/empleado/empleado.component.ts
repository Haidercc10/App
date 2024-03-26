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
 loading : boolean = false;
 palletAbierto : any = [];

  ngOnInit(): void {
    this.cargarPallets();
    this.filtrarPallets();
    this.cargarRollosPallets();
  }

  cargarPallets(){
    //this.pallets = [];
    //this.pallets.push(
      this.data = [
       { 'pallet' : 0, 'cliente' : 'Hielo B/quilla', 'item' : 101, 'rollo' : 6871, 'ref' : 'Bolsa 1', 'cant' : 500, 'unidad' : 'Und', 'proceso' : 'SELLA', 'rollos' : [] },
       { 'pallet' : 0, 'cliente' : 'Hielo B/quilla', 'item' : 101, 'rollo' : 6872, 'ref' : 'Bolsa 1', 'cant' : 200, 'unidad' : 'Und', 'proceso' : 'SELLA', 'rollos' : [] },
       { 'pallet' : 88, 'cliente' : 'Hielo B/quilla', 'item' : 101, 'rollo' : 6873, 'ref' : 'Bolsa 1', 'cant' : 1000, 'unidad' : 'Und', 'proceso' : 'SELLA', 'rollos' : [] },
       { 'pallet' : 88, 'cliente' : 'Hielo B/quilla', 'item' : 101, 'rollo' : 6874, 'ref' : 'Bolsa 1', 'cant' : 200, 'unidad' : 'Und', 'proceso' : 'SELLA', 'rollos' : [] },
       { 'pallet' : 89, 'cliente' : 'Hielo B/quilla', 'item' : 101, 'rollo' : 6875, 'ref' : 'Bolsa 1', 'cant' : 4000, 'unidad' : 'Und', 'proceso' : 'SELLA', 'rollos' : [] },
       { 'pallet' : 89, 'cliente' : 'Hielo B/quilla', 'item' : 101, 'rollo' : 6876, 'ref' : 'Bolsa 1', 'cant' : 1000, 'unidad' : 'Und', 'proceso' : 'SELLA', 'rollos' : [] },
    //)]
      ];
  }

  filtrarPallets(){
    this.pallets = this.data.reduce((a: any, b: any) => {
      if(!a.map((x: { pallet: any; }) => x.pallet).includes(b.pallet)) a = [...a, b];
      console.log(a)
      return a;
    }, []);
  }

  cargarRollosPallets(){
    this.data.forEach((a: any) => {
      let index = this.pallets.findIndex((b: { pallet: any; }) => b.pallet == a.pallet);
      this.pallets[index].rollos.push(a);
    });
  }

  cantidadPallets = (pallet : number, index : number) => this.pallets[index].rollos.filter((x: { pallet: any; }) => x.pallet == pallet).reduce((a: any, b: { cant: any; }) => a + b.cant, 0)

  cantidadPalletsSeleccionados = (pallet : number, index : number) => this.palletsSeleccionados[index].rollos.filter((x: { pallet: any; }) => x.pallet == pallet).reduce((a: any, b: { cant: any; }) => a + b.cant, 0)


  seleccionTodosPallets() {
    this.loading = true;
    this.pallets = [];
    setTimeout(() => { this.loading = false }, 5);
  }

  deseleccionTodosPallets() {
    this.loading = true;
    this.palletsSeleccionados = [];
    setTimeout(() => { this.loading = false }, 5);
  }

  seleccionPallet(data : any) {
    this.loading = true;
    let index = this.pallets.findIndex((x: { pallet: any; }) => x.pallet == data.pallet);
    this.pallets.splice(index, 1)
    this.palletsSeleccionados.sort((a: any, b: any) => a.pallet - b.pallet);
    setTimeout(() => { this.loading = false }, 5);

  }

  deseleccionPallet(data : any) {
    this.loading = true;
    let index = this.palletsSeleccionados.findIndex((x: { pallet: any; }) => x.pallet == data.pallet);
    this.palletsSeleccionados.splice(index, 1);
    this.pallets.sort((a: any, b: any) => a.pallet - b.pallet);
    setTimeout(() => { this.loading = false }, 5);

  }

  seleccionTodoTablaPallets(data : any) {
    this.loading = true;
    let index = this.pallets.findIndex((x: { pallet: any; }) => x.pallet == data.pallet);
    this.pallets.splice(index, 1);
    this.palletsSeleccionados = this.palletsSeleccionados.concat(data);
    this.palletsSeleccionados.sort((a: any, b: any) => a.pallet - b.pallet);
    setTimeout(() => { this.loading = false }, 5);
  }

  deseleccionTodoTablaPallets(data : any) {
    this.loading = true;
    let index = this.pallets.findIndex((x: { pallet: any; }) => x.pallet == data.pallet);
    this.pallets = this.pallets.concat(data);
    this.pallets.splice(index, 1);
    this.palletsSeleccionados.sort((a: any, b: any) => a.pallet - b.pallet);
    setTimeout(() => { this.loading = false }, 5);
  }

  seleccionRolloPallets(rollo : any, i : number) {
    this.loading = true;
    //console.log(rollo, i)
    this.palletsSeleccionados = this.palletsSeleccionados.concat(rollo)
    i == 0 ? console.log(this.palletsSeleccionados) : null
    console.log(this.palletsSeleccionados)
    rollo.rollos;
    //rollo.rollos.push(rollo)
    console.log(rollo)
    console.log(rollo.rollos)

    //this.palletsSeleccionados = this.palletsSeleccionados.concat(rollo)
    //console.log(rollo.rollos.splice(i, 1))
    //this.palletsSeleccionados.push(rollo)
    //console.log(this.palletsSeleccionados)
    //let index = this.pallets.findIndex((x: { pallet: any; }) => x.pallet == rollo.pallet);
    //let i = this.pallets[index].rollos.findIndex((x: { rollo: any; }) => x.rollo == rollo.rollo);
    //this.palletsSeleccionados = this.palletsSeleccionados.concat(this.pallets);
    //console.log(this.pallets[index])
    //this.palletsSeleccionados[index].rollos.push(rollo)

    //console.log(this.palletsSeleccionados)
    //this.palletsSeleccionados[index].rollos.push(rollo)
    //console.log(this.palletsSeleccionados)
    //this.pallets[i].rollos.splice(i, 1);
    //if(this.pallets[i].rollos.length == 0) this.pallets.splice(i, 1)
    //this.palletsSeleccionados.sort((a: any, b: any) => a.pallet - b.pallet);
    //this.palletsSeleccionados[index].rollos.sort((a: any, b: any) => a.rollo - b.rollo);
    setTimeout(() => { this.loading = false }, 5);
  }

  onRowSelect(event: any, i : number) {
    console.log(event.data);
    this.palletsSeleccionados.push(event.data)
    this.palletsSeleccionados[0].rollos = [];
    this.palletsSeleccionados[0].rollos.push(event.data)
  }

  onRowUnselect(event: any) {
    console.log(event.data);

  }

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
