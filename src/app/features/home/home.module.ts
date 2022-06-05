import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home.routing.module';
import { MaterialModule } from '../../material.module';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { StudentInscriptionComponent } from './components/student-inscription/student-inscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
      HomeComponent,
      StudentInscriptionComponent
    ],
    imports: [
        HomeRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        SharedModule
    ]
})
export class HomeModule {

}
