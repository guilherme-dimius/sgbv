import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { RoutingModule } from './app.router'

import { AppComponent } from './app.component';
import { LocutoresListaComponent } from './locutores/locutores-lista/locutores-lista.component';
//import { CategoriasListaComponent } from './categorias/categorias-lista/categorias-lista.component';
import { MenuComponent } from './nav/menu/menu.component';
import { LocutoresFormComponent } from './locutores/locutores-form/locutores-form.component';

@NgModule(
{
  declarations: 
  [
    AppComponent,
    LocutoresListaComponent,
    //CategoriasListaComponent,
    MenuComponent,
    LocutoresFormComponent
  ],
  imports: 
  [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
