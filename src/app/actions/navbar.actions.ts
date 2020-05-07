import {createAction, props} from '@ngrx/store';

export const showNavbar = createAction(
    '[Navbar component] Show'
);

export const hideNavbar = createAction(
    '[Navbar component] Hide'
);

export const changeTab = createAction(
    '[Navbar componet] change tabs',
    props<{pageID: number}>()
);
