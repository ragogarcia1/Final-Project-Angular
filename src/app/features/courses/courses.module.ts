import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './components/course/course.component';
import { MaterialModule } from '../../material.module';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesRoutingModule } from './courses.routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared/shared.module';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';



@NgModule({
  declarations: [
    CourseComponent,
    CoursesComponent,
    CreateCourseComponent,
    EditCourseComponent
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
