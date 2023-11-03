import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from './app.component';
import { PracticaComponent } from './Vistas/practica/practica.component';
import { PruebaGitComponent } from './Vistas/prueba-git/prueba-git.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SumarComponent } from './Vistas/sumar/sumar.component';
import { RestarComponent } from './Vistas/restar/restar.component';
import { ContadorComponent } from './Vistas/contador/contador.component';

@NgModule({
  declarations: [
    AppComponent,
    PracticaComponent,
    PruebaGitComponent,
    SumarComponent,
    RestarComponent,
    ContadorComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
