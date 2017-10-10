import { Routes, RouterModule } from '@angular/router'

import { LocutoresListaComponent } from './locutores/locutores-lista/locutores-lista.component';
import { LocutoresFormComponent } from './locutores/locutores-form/locutores-form.component';

import { BibliotecasListaComponent } from './bibliotecas/bibliotecas-lista/bibliotecas-lista.component';
import { BibliotecasFormComponent } from './bibliotecas/bibliotecas-form/bibliotecas-form.component';

import { ProjetosListaComponent } from './projetos/projetos-lista/projetos-lista.component';
import { ProjetosFormComponent } from './projetos/projetos-form/projetos-form.component';

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
      path: 'bibliotecas',
      component: BibliotecasListaComponent
   },
   {
      path: 'bibliotecas/nova',
      component: BibliotecasFormComponent
   },

   {
      path: 'projetos',
      component: ProjetosListaComponent
   },
   {
      path: 'projetos/novo',
      component: ProjetosFormComponent
   }

]

export const RoutingModule = RouterModule.forRoot(routes)