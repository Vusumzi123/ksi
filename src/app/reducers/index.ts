import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as navbarReducer from './navbar.reducer';
import * as transitionReducer from './transition.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  navbarReducer: navbarReducer.reducer,
  transitionReducer: transitionReducer.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
