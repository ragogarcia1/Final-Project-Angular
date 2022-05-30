import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { SecurityGuard } from 'src/app/core/guards/security.guard';
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
