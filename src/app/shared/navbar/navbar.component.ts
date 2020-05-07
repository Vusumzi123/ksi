import { Router, UrlTree, NavigationStart } from '@angular/router';
import * as navbarConstants from 'src/app/constants/navbar.constants';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import * as navbarReducer from '../../reducers/navbar.reducer';
import * as navbarActions from 'src/app/actions/navbar.actions';
import { NavigateService } from 'src/app/services/navigate.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('showHideNavbar', [
      state('show', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      state('hide', style({
        transform: 'translateY(-120px)',
        opacity: 0
      })),
      transition('show => hide', [
        animate('600ms')
      ]),
      transition('hide => show', [
        animate('600ms')
      ])
    ])
  ]
})
export class NavbarComponent implements OnInit {

  navbarState$: Observable<navbarReducer.NavbarState>;
  navbarConstants = navbarConstants.constants;
  isDropdownShowing = false;
  isHiding = false;

  constructor(
    private store: Store<{ navbarReducer: navbarReducer.NavbarState }>,
    public location: Location,
    private router: Router,
    private navigateService: NavigateService) {
      this.navbarState$ = store.pipe(select('navbarReducer'));
  }

  ngOnInit() {}

  onChangeTab(index) {
    this.navigateService.navigateByUrl( navbarConstants.constants.pages[index].url );
    this.store.dispatch( navbarActions.changeTab( { pageID: index } ) );
    this.onDropdownToggle();
  }

  onDropdownToggle() {
    if (this.isDropdownShowing && !this.isHiding) {
      this.isHiding = true;
      setTimeout((ctx) => {
        ctx.isDropdownShowing = !ctx.isDropdownShowing;
        ctx.isHiding = false;
      }, 500, this);
      return;
    }
    this.isDropdownShowing = !this.isDropdownShowing;
  }
}
