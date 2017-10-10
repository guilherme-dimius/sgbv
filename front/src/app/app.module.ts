import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http'
import { RoutingModule } from './app.router'

import { AppComponent } from './app.component';

import { MenuComponent } from './nav/menu/menu.component';
import { LocutoresListaComponent } from './locutores/locutores-lista/locutores-lista.component';
import { LocutoresFormComponent } from './locutores/locutores-form/locutores-form.component';

import { BibliotecasListaComponent } from './bibliotecas/bibliotecas-lista/bibliotecas-lista.component';
import { BibliotecasFormComponent } from './bibliotecas/bibliotecas-form/bibliotecas-form.component';
import { ProjetosFormComponent } from './projetos/projetos-form/projetos-form.component';
import { ProjetosListaComponent } from './projetos/projetos-lista/projetos-lista.component';


@NgModule(
{
  declarations: 
  [
    AppComponent,
    LocutoresListaComponent,
    MenuComponent,
    LocutoresFormComponent,

    BibliotecasListaComponent,
    BibliotecasFormComponent,
    ProjetosFormComponent,
    ProjetosListaComponent
  ],
  imports: 
  [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
