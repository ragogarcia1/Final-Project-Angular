import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';

const routes: Routes = [
  { path: '', component: CoursesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class CoursesRoutingModule {}
