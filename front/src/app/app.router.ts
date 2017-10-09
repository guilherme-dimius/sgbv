import { Routes, RouterModule } from '@angular/router'

import { LocutoresListaComponent } from './locutores/locutores-lista/locutores-lista.component';
import { LocutoresFormComponent } from './locutores/locutores-form/locutores-form.component';
import { CategoriasListaComponent } from './categorias/categorias-lista/categorias-lista.component';

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
   }

]

export const RoutingModule = RouterModule.forRoot(routes)