import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservasRoutingModule } from './reservas-routing.module';
import { ReservasFormComponent } from './reservas-form/reservas-form.component';


@NgModule({
  declarations: [
    ReservasFormComponent
  ],
  imports: [
    CommonModule,
    ReservasRoutingModule
  ]
})
export class ReservasModule { }
