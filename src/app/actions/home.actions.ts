import { createAction, props } from "@ngrx/store";

export const setInterval = createAction(
  "[Home Component] Set Interval",
  props<{ value: number }>()
);
export const startIncrement = createAction("[Home Component] Start Increment");
export const startDecrement = createAction("[Home Component] Start Decrement");
export const stop = createAction("[Home Component] Stop");
