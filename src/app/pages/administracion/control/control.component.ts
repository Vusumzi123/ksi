import { NavigateService } from 'src/app/services/navigate.service';
import { Component, OnInit } from '@angular/core';
import * as administracionConstants from 'src/app/constants/administracion.constants';
import * as navbarConstants from 'src/app/constants/navbar.constants';


@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  icons = administracionConstants.constants.ICONS;

  constructor(private navigateService: NavigateService) { }

  ngOnInit() {
  }

  onContactarClick() {
    this.navigateService.navigateByUrl( navbarConstants.constants.pages[navbarConstants.pages.CONTACTO].url );
  }

}
