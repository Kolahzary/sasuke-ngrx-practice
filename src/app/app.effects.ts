import { Action } from "@ngrx/store";
import { interval } from "rxjs";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as CounterActions from "./actions/counter.actions";
import { mergeMap, map, catchError, tap, takeUntil } from "rxjs/operators";

@Injectable()
export class AppEffects {
  counterIntervalEffects$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CounterActions.start),
      mergeMap(action =>
        interval(action.interval).pipe(
          takeUntil(this.actions$.pipe(ofType(CounterActions.stop))),
          map(data => CounterActions.increment())
        )
      )
    );
  });

  constructor(private actions$: Actions) {}
}
