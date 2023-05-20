import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PracticaComponent } from './Vistas/practica/practica.component';
import { PruebaGitComponent } from './Vistas/prueba-git/prueba-git.component';

@NgModule({
  declarations: [
    AppComponent,
    PracticaComponent,
    PruebaGitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
