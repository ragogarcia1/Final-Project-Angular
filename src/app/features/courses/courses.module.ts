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
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from 'src/app/state/app.state';
import { environment } from '../../../environments/environment.prod';



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
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production, name: 'courses' })
  ],
})
export class CoursesModule { }

