import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AlumnsRoutingModule } from './alumns.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlumnComponent } from './components/alumn/alumn.component';
import { MaterialModule } from '../../material.module';
import { FormAlumnComponent } from './components/form-alumn/form-alumn.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared/shared.module';
import { FormAlumnCreateComponent } from './components/form-alumn-create/form-alumn-create.component';

@NgModule({
  declarations: [
    AlumnComponent,
    FormAlumnComponent,
    FormAlumnCreateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    AlumnsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AlumnsModule {

}
