import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { TransitionStateI } from '../reducers/transition.reducer';
import {startTransition} from '../actions/transition.actions';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  constructor(
    private router: Router,
    private store: Store<{transitionReducer: TransitionStateI}>
  ) { }

  navigateByUrl( url: string ){
    const ctx = this;
    this.store.dispatch( startTransition() );
    setTimeout(() => {
      ctx.router.navigateByUrl(url);
    } , 300);
  }
}
