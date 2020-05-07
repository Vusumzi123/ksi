import { Action, createReducer, on } from '@ngrx/store';
import * as transitionActions from '../actions/transition.actions';

export interface TransitionStateI {
    isPageVisible: boolean;
}

export const initialState: TransitionStateI = {
    isPageVisible: false
};

const transitionReducer = createReducer(
    initialState,
    on( transitionActions.startTransition, (state: TransitionStateI) => ({ ...state, isPageVisible: false }) ),
    on( transitionActions.endTransition, (state: TransitionStateI) => ({ ...state, isPageVisible: true }) )
);

export function reducer(state: TransitionStateI | undefined, action: Action) {
    return transitionReducer(state, action);
}
