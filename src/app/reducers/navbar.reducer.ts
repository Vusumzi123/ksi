import { Action, createReducer, on } from '@ngrx/store';
import * as navbarActions from '../actions/navbar.actions';

export interface NavbarState {
    isShowing: boolean;
    activeTab: number;
}

export const initialState: NavbarState = {
    isShowing: false,
    activeTab: 0
};

const navbarReducer = createReducer(
    initialState,
    on(navbarActions.hideNavbar, (state: NavbarState) => ({...state, isShowing: false })),
    on(navbarActions.showNavbar, (state: NavbarState ) => ({...state, isShowing: true })),
    on(navbarActions.changeTab, (state: NavbarState, page: { pageID: number }) => ({...state, activeTab: page.pageID }))
);

export function reducer(state: NavbarState | undefined, action: Action) {
    return navbarReducer(state, action);
}
