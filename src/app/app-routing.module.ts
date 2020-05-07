import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'administracion', loadChildren: () => import('./pages/administracion/administracion.module').then(m => m.AdministracionModule) },
  { path: 'venta-renta', loadChildren: () => import('./pages/venta-renta/venta-renta.module').then(m => m.VentaRentaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
