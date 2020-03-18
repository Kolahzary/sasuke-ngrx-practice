import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import * as actions from "../../actions/counter.actions";
import { State } from "src/app/state";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.scss"]
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;
  customCount: number = 100;

  constructor(private store: Store<State>) {
    this.count$ = store.pipe(select(state => state.counter.count));
  }

  ngOnInit() {}

  increment() {
    this.store.dispatch(actions.increment());
  }

  decrement() {
    this.store.dispatch(actions.decrement());
  }

  reset() {
    this.store.dispatch(actions.reset());
  }

  set() {
    this.store.dispatch(actions.set({ count: this.customCount }));
  }
}
