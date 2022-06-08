import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home.routing.module';
import { MaterialModule } from '../../material.module';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { StudentInscriptionComponent } from './components/student-inscription/student-inscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from '../../state/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment.prod';


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
        SharedModule,
        StoreModule.forRoot(ROOT_REDUCERS),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production, name: 'courses' })
    ]
})
export class HomeModule {

}
