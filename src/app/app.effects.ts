import { Store, select } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import { createSelector } from "@ngrx/store";
import { interval, Observable } from "rxjs";
import {
  mergeMap,
  map,
  takeUntil,
  filter,
  skipWhile,
  distinctUntilChanged
} from "rxjs/operators";
import { isEqual } from "lodash";

import { CounterActions } from "./actions";
import { State } from "./state";
import { CounterState } from "./state/counter.state";

export const selectCounter = (state: State) => state.counter;

export const selectCounterConfig = createSelector(
  selectCounter,
  (state: CounterState) => {
    return {
      started: state.started,
      inverse: state.inverse,
      interval: state.interval
    };
  }
);

@Injectable()
export class AppEffects {
  intervalEffect$ = createEffect(() => {
    return this.store.pipe(
      select(selectCounterConfig),
      distinctUntilChanged((x, y) => isEqual(x, y)),
      mergeMap(counter => {
        return interval(counter.interval).pipe(
          takeUntil(
            this.store.pipe(
              select(selectCounterConfig),
              skipWhile((value, index) => isEqual(counter, value))
            )
          ),
          filter(x => counter.started),
          map(data => {
            if (!counter.inverse) {
              return CounterActions.increment();
            } else {
              return CounterActions.decrement();
            }
          })
        );
      })
    );
  });

  constructor(private actions$: Actions, private store: Store<State>) {}
}
