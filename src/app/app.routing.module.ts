import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { SecurityGuard } from './core/guards/security.guard';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [
      { path: '', component: LayoutComponent,
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full'},
          { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
          { path: 'alumns', loadChildren: () => import('./features/alumns/alumns.module').then(module => module.AlumnsModule)},
          { path: 'courses', loadChildren: () => import('./features/courses/courses.module').then(module => module.CoursesModule)},
          { path: 'register', component: RegisterComponent },
          { path: 'login', component: LoginComponent }
        ]
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
