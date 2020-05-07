import { ScrolltopService } from './../../services/scrolltop.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as navbarReducer from 'src/app/reducers/navbar.reducer';
import * as navbarActions from 'src/app/actions/navbar.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(
    private store: Store<navbarReducer.NavbarState>,
    private scrollService: ScrolltopService) {

  }

  ngOnInit() {
    const ctx = this;
    setTimeout( this.showNavbar, 2000, ctx );
  }

  ngAfterViewInit() {
    this.scrollService.scroll();
  }

  showNavbar(ctx) {
    ctx.store.dispatch(navbarActions.showNavbar());
  }

}
