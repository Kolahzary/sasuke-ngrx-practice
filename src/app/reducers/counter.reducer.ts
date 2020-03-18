import { createReducer, on, Action } from "@ngrx/store";

import { CounterActions, HomeActions } from "../actions";
import { CounterState } from "../state/counter.state";
import produce from "immer";

const initialState: CounterState = {
  started: true,
  inverse: false,
  count: 10,
  interval: 1000
};

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, current =>
    produce(current, draft => {
      draft.count++;
    })
  ),
  on(CounterActions.decrement, current =>
    produce(current, draft => {
      draft.count--;
    })
  ),
  on(CounterActions.reset, current =>
    produce(current, draft => {
      draft.count = 0;
    })
  ),
  on(CounterActions.set, (current, action) =>
    produce(current, draft => {
      draft.count = action.count;
    })
  ),

  on(HomeActions.setInterval, (current, action) =>
    produce(current, draft => {
      draft.interval = action.value;
    })
  ),
  on(HomeActions.startIncrement, (current, action) =>
    produce(current, draft => {
      draft.started = true;
      draft.inverse = false;
    })
  ),
  on(HomeActions.startDecrement, (current, action) =>
    produce(current, draft => {
      draft.started = true;
      draft.inverse = true;
    })
  ),
  on(HomeActions.stop, (current, action) =>
    produce(current, draft => {
      draft.started = false;
    })
  )
);
