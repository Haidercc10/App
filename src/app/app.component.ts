import { Component,  OnInit } from '@angular/core';
import { ServicioPruebaService } from './Servicios/servicio-prueba.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
import { jsPDF }  from 'jspdf';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Element } from '@angular/compiler';



//Decorador
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo : any = "Mi primera App";
  welcome : any = `Hola que tal?`
  array : any[] = [];
  form !: FormGroup;
  soloLectura : boolean = true;

  constructor(private svcPrueba : ServicioPruebaService,
    private frmBuilder : FormBuilder){
      this.cargarFormulario();
    }

  ngOnInit(): void {
    this.cargarJson();
    setTimeout(() => {
      this.miFuncion()
    }, 1000);

    /*const documentDefinition = {
      content: [
        'Hola, este es un PDF generado con <link>pdfmake</link> en <link>Angular</link>.'
      ]
    };

    const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
    pdfDocGenerator.print();*/
    //this.generarPdf();

  }

  cargarFormulario(){
    this.form = this.frmBuilder.group({
      nombre : [null],
      apellido : [null],
      saldo : [false]
    });

  }

  cargarJson = () => this.svcPrueba.getPosts().subscribe(data => { this.array = data; console.log(this.array) });

  miFuncion(){
    let nuevo = this.array.reduce((acum, item) => acum + item.userId, 0);
    console.log(nuevo);
  }

  generarPdf(){
    const pdf = new jsPDF();
    pdf.text('Hello', 10, 10);

    pdf.autoPrint({variant : 'non-conform'}, );
    pdf.output('dataurlnewwindow');
    pdf.save('autoprint.pdf');
    window.open(pdf.output('bloburl'), '_blank');
    //pdf.getCurrentPageInfo()
  }

  habilitarCampo = () => this.soloLectura ? this.soloLectura = false : this.soloLectura = true;
}

