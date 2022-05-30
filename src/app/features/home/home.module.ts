import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home.routing.module';
import { MaterialModule } from '../../material.module';


@NgModule({
    declarations: [
    ],
    imports: [
        HomeRoutingModule,
        CommonModule,
        MaterialModule
    ]
})
export class HomeModule {

}
