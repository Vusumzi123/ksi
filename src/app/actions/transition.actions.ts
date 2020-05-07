import {createAction, props} from '@ngrx/store';

export const startTransition = createAction(
    '[Transition animations] start'
);

export const endTransition = createAction(
    '[Transition animations] end'
);
