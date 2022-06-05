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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';



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
    FormsModule,
    CoursesRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    StoreModule.forRoot(ROOT_REDUCERS)
  ],
})
export class CoursesModule { }
function ROOT_REDUCERS(ROOT_REDUCERS: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

