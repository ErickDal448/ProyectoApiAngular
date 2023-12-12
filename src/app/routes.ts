import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { InfoComponent } from './info/info.component';

export const routeConfig: Routes = [
    {
      path: '',
      component: InicioComponent,
      title: 'Inicio'
    },
    {
      path: 'Categorias',
      component: CategoriasComponent,
      title: 'Categorias'
    },
    {
      path: 'Info/:id',
      component: InfoComponent,
      title: 'Info'
    }
];
  

