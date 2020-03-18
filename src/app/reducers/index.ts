import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { State } from '../state';
import { counterReducer } from './counter.reducer';

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
