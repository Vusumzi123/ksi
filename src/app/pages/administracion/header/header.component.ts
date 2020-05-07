import { ModalService } from './../../../shared/modal/modal.service';
import { NavigateService } from 'src/app/services/navigate.service';
import { Component, OnInit } from '@angular/core';
import * as navbarConstants from 'src/app/constants/navbar.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private navigateService: NavigateService, private modalService: ModalService) { }

  ngOnInit() {
  }

  onloginPageClick() {
    this.modalService.dialogModal({
      body: `<p class="text-center">Este link te llevará a una página externa ¿Deseas continuar?</p>`,
      backdrop: 'static',
      okButtonText: 'Continuar',
      cancelButtonText: 'Regresar',
      title: ' '
    }).then( () => {
      window.open('https://seguro.casandra.com.mx/Login.aspx', '_blank');
    })
    .catch(() => { });

    /* window.open('https://seguro.casandra.com.mx/Login.aspx', '_blank'); */
    
  }

}
