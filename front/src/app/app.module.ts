import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { RoutingModule } from './app.router'

import { AppComponent } from './app.component';

import { BibliotecasListaComponent } from './bibliotecas/bibliotecas-lista/bibliotecas-lista.component';
import { GravacoesListaComponent } from './gravacoes/gravacoes-lista/gravacoes-lista.component';
import { LocutoresListaComponent } from './locutores/locutores-lista/locutores-lista.component';
import { VozesListaComponent } from './vozes/vozes-lista/vozes-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    BibliotecasListaComponent,
    GravacoesListaComponent,
    LocutoresListaComponent,
    VozesListaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
