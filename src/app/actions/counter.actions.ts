import { createAction, props } from "@ngrx/store";

export const start = createAction(
  "[Counter Component] Start",
  props<{ interval: number }>()
);
export const stop = createAction("[Counter Component] Stop");

export const increment = createAction("[Counter Component] Increment");
export const decrement = createAction("[Counter Component] Decrement");
export const reset = createAction("[Counter Component] Reset");
export const set = createAction(
  "[Counter Component] Set",
  props<{ count: number }>()
);
