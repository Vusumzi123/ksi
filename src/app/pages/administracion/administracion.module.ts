import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { AdministracionComponent } from './administracion.component';
import { HeaderComponent } from './header/header.component';
import { AppInfoComponent } from './app-info/app-info.component';
import { ControlComponent } from './control/control.component';


@NgModule({
  declarations: [AdministracionComponent, HeaderComponent, AppInfoComponent, ControlComponent],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
