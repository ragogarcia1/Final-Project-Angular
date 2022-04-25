import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnComponent } from './features/alumns/components/alumn/alumn.component';

const routes: Routes = [
  { path: 'register-alumn', component: AlumnComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
