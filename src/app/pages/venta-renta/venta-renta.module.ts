import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentaRentaRoutingModule } from './venta-renta-routing.module';
import { VentaRentaComponent } from './venta-renta.component';


@NgModule({
  declarations: [VentaRentaComponent],
  imports: [
    CommonModule,
    VentaRentaRoutingModule
  ]
})
export class VentaRentaModule { }
