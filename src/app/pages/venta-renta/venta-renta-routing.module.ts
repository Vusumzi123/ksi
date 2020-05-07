import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentaRentaComponent } from './venta-renta.component';

const routes: Routes = [{ path: '', component: VentaRentaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentaRentaRoutingModule { }
