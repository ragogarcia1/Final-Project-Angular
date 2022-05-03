import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnService } from './services/alumn.service';
import { CourseService } from './services/course.service';
import { ServiceSecurity } from './services/security.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AlumnService,
    CourseService,
    ServiceSecurity
  ]
})

export class CoreModule { }
