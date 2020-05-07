import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministracionComponent } from './administracion.component';

const routes: Routes = [
  { path: '', component: AdministracionComponent },
  { path: 'admin-login', loadChildren: () => import('../admin-login/admin-login.module').then(m => m.AdminLoginModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
