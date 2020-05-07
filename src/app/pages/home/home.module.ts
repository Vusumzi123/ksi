import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { DescriptionComponent } from './description/description.component';
import { CardComponent } from './description/card/card.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [HomeComponent, HeaderComponent, DescriptionComponent, CardComponent, CarouselComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule
  ]
})
export class HomeModule { }
