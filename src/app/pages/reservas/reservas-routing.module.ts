import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReservasFormComponent } from './reservas-form/reservas-form.component';
const routes: Routes = [

  {path: '', component: ReservasFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservasRoutingModule { }
