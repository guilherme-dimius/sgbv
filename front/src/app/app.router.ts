import { Routes, RouterModule } from '@angular/router'

import { LocutoresListaComponent } from './locutores/locutores-lista/locutores-lista.component';
import { LocutoresFormComponent } from './locutores/locutores-form/locutores-form.component';

import { BibliotecasListaComponent } from './bibliotecas/bibliotecas-lista/bibliotecas-lista.component';
import { BibliotecasFormComponent } from './bibliotecas/bibliotecas-form/bibliotecas-form.component';

import { ProjetosListaComponent } from './projetos/projetos-lista/projetos-lista.component';
import { ProjetosFormComponent } from './projetos/projetos-form/projetos-form.component';

import { GravacoesListaComponent } from './gravacoes/gravacoes-lista/gravacoes-lista.component';
import { GravacoesFormComponent } from './gravacoes/gravacoes-form/gravacoes-form.component';

import { CodificacoesListaComponent } from './codificacoes/codificacoes-lista/codificacoes-lista.component';
import { CodificacoesFormComponent } from './codificacoes/codificacoes-form/codificacoes-form.component';

const routes : Routes = 
[
   {
      path: '',
      component: LocutoresListaComponent
   },

   {
      path: 'locutores',
      component: LocutoresListaComponent
   },
   {
      path: 'locutores/novo',
      component: LocutoresFormComponent
   },
   {
      path: 'locutores/:id',
      component: LocutoresFormComponent
   },

   {
      path: 'bibliotecas',
      component: BibliotecasListaComponent
   },
   {
      path: 'bibliotecas/nova',
      component: BibliotecasFormComponent
   },
   {
      path: 'bibliotecas/:id',
      component: BibliotecasFormComponent
   },

   {
      path: 'projetos',
      component: ProjetosListaComponent
   },
   {
      path: 'projetos/novo',
      component: ProjetosFormComponent
   },
   {
      path: 'projetos/:id',
      component: ProjetosFormComponent
   },


   {
      path: 'gravacoes',
      component: GravacoesListaComponent
   },
   {
      path: 'gravacoes/nova',
      component: GravacoesFormComponent
   },
   {
      path: 'gravacoes/:id',
      component: GravacoesFormComponent
   },


   {
    path: 'codificacoes',
    component: CodificacoesListaComponent
   },
   {
    path: 'codificacoes/nova',
    component: CodificacoesFormComponent
   },
   {
      path: 'codificacoes/:id',
      component: CodificacoesFormComponent
   }
]

export const RoutingModule = RouterModule.forRoot(routes)