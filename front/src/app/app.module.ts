import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http'
import { RoutingModule } from './app.router'

import { MenuComponent } from './nav/menu/menu.component';
import { AppComponent } from './app.component';
import { LocutoresListaComponent } from './locutores/locutores-lista/locutores-lista.component';

import { LocutoresFormComponent } from './locutores/locutores-form/locutores-form.component';
import { BibliotecasListaComponent } from './bibliotecas/bibliotecas-lista/bibliotecas-lista.component';
import { BibliotecasFormComponent } from './bibliotecas/bibliotecas-form/bibliotecas-form.component';

import { ProjetosFormComponent } from './projetos/projetos-form/projetos-form.component';
import { ProjetosListaComponent } from './projetos/projetos-lista/projetos-lista.component';
import { GravacoesFormComponent } from './gravacoes/gravacoes-form/gravacoes-form.component';

import { GravacoesListaComponent } from './gravacoes/gravacoes-lista/gravacoes-lista.component';
import { CodificacoesFormComponent } from './codificacoes/codificacoes-form/codificacoes-form.component';
import { CodificacoesListaComponent } from './codificacoes/codificacoes-lista/codificacoes-lista.component';


@NgModule(
{
  declarations: 
  [
    AppComponent,
    MenuComponent,
    
    LocutoresListaComponent,    
    LocutoresFormComponent,

    BibliotecasListaComponent,
    BibliotecasFormComponent,

    ProjetosFormComponent,
    ProjetosListaComponent,

    GravacoesFormComponent,
    GravacoesListaComponent,

    CodificacoesFormComponent,
    CodificacoesListaComponent
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
