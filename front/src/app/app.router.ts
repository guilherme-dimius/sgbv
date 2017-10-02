import { Routes, RouterModule } from '@angular/router'

import { BibliotecasListaComponent } from './bibliotecas/bibliotecas-lista/bibliotecas-lista.component';
import { GravacoesListaComponent } from './gravacoes/gravacoes-lista/gravacoes-lista.component';
import { LocutoresListaComponent } from './locutores/locutores-lista/locutores-lista.component';
import { VozesListaComponent } from './vozes/vozes-lista/vozes-lista.component';

const routes : Routes = [
   {
      path: '',
      component: BibliotecasListaComponent
   },

   {
      path: 'bibliotecas',
      component: BibliotecasListaComponent
   },

   {
    path: 'gravacoes',
    component: GravacoesListaComponent
   },

   {
    path: 'locutores',
    component: LocutoresListaComponent
   },

   {
    path: 'vozes',
    component: VozesListaComponent
   },

]

export const RoutingModule = RouterModule.forRoot(routes)