import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from './app.component';
import { PracticaComponent } from './Vistas/practica/practica.component';
import { PruebaGitComponent } from './Vistas/prueba-git/prueba-git.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    PracticaComponent,
    PruebaGitComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
