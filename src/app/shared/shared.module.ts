import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [NavbarComponent, FooterComponent, ModalComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ModalComponent
  ],
  bootstrap: [
    ModalComponent
  ]
})
export class SharedModule { }
