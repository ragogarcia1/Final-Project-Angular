import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AlumnComponent } from './components/alumn/alumn.component';

const routes: Routes = [
  { path: '', component: AlumnComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AlumnsRoutingModule {}
