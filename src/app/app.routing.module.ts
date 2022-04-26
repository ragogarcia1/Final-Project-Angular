import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnComponent } from './features/alumns/components/alumn/alumn.component';

const routes: Routes = [
      { path: 'alumns', loadChildren: () => import('./features/alumns/alumns.module').then(module => module.AlumnsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
