import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './components/course/course.component';
import { MaterialModule } from '../../material.module';
import { CoursesComponent } from './components/courses/courses.component';
import { SharedModule } from '../../shared/shared.module';
import { CoursesRoutingModule } from './courses.routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    CourseComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    MaterialModule,
    CoursesRoutingModule,
    FlexLayoutModule
  ],
})
export class CoursesModule { }
