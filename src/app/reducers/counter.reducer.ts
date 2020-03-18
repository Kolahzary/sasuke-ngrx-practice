import { createReducer, on, Action } from "@ngrx/store";

import { increment, decrement, reset, set } from "../actions/counter.actions";
import { CounterState } from "../state/counter.state";
import produce from "immer";

const initialState: CounterState = {
  count: 0
};

export const counterReducer = produce((draft: CounterState, action) => {
  switch (action.type) {
    case increment.type:
      draft.count++;
      break;

    case decrement.type:
      draft.count--;
      break;

    case reset.type:
      draft.count = 0;
      break;

    case set.type:
      draft.count = action.count;
      break;

    default:
      break;
  }
}, initialState);
