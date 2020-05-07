import { Store, select } from '@ngrx/store';
import { ScrolltopService } from './services/scrolltop.service';
import { filter } from 'rxjs/operators';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';
import { Observable } from 'rxjs';

import { endTransition } from './actions/transition.actions';
import * as navbarActions from './actions/navbar.actions';
import * as navbarConstants from './constants/navbar.constants';
import { NavbarState } from './reducers/navbar.reducer';
import { TransitionStateI } from './reducers/transition.reducer';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('pageTransition', [
          state('start', style({
            opacity: 0
          })),
          state('end', style({
            opacity: 1
          })),
          transition('start => end', [
            animate('300ms')
          ]),
          transition('end => start', [
            animate('300ms')
          ])
        ])
      ]
})
export class AppComponent implements OnInit {

    transitionState$: Observable<TransitionStateI>;
    @ViewChild(NavbarComponent, {static: false}) navbar: NavbarComponent;

    constructor(
      private router: Router,
      private location: Location,
      private scrollService: ScrolltopService,
      private store: Store<{transitionReducer: TransitionStateI, navbarReducer: NavbarState}>) {
        this.transitionState$ = store.pipe(select('transitionReducer'));
    }

    ngOnInit() {
      this.router.events.pipe(
          filter( e => e instanceof NavigationEnd )
        ).subscribe( (event: NavigationEnd) => {
          this.endPageTransition(this);
          this.setNavbarTab(this);
        });
    }

    endPageTransition(ctx: AppComponent) {
      const currentUrl = ctx.location.path();
      const isHome = currentUrl.includes( navbarConstants.constants.pages[navbarConstants.pages.HOME].url ) ||
        currentUrl === '' ||
        currentUrl === '/';
      ctx.scrollService.scroll();
      if ( !isHome ) { ctx.store.dispatch( navbarActions.showNavbar() ); }
      setTimeout(() => {
          ctx.store.dispatch( endTransition() );
      } , 300);
    }

    setNavbarTab(ctx: AppComponent) {
      const currentUrl = ctx.location.path();
      const pages = navbarConstants.constants.pages;
      const fullPathsArr = pages.map(
        page => page.fullpath
      );
      const currentPageNum = fullPathsArr.indexOf( currentUrl );
      if ( currentPageNum < 0 ) {
        return;
      }
      const pageObj = pages[currentPageNum];
      const isParentPath = pageObj.isParentPath;
      const tabIndex = isParentPath ? currentPageNum : pageObj.parent ;
      ctx.store.dispatch( navbarActions.changeTab( { pageID: tabIndex } ) );
    }
}
