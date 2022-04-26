import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
      { path: 'alumns', loadChildren: () => import('./features/alumns/alumns.module').then(module => module.AlumnsModule)},
      { path: 'courses', loadChildren: () => import('./features/courses/courses.module').then(module => module.CoursesModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
