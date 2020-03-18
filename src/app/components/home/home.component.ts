import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "src/app/state";
import { HomeActions } from "../../actions";
import { interval, Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy {
  private _interval: number;
  get interval(): number {
    return this._interval;
  }
  set interval(value: number) {
    this.store.dispatch(HomeActions.setInterval({ value }));
  }

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store
      .select(x => x.counter.interval)
      .subscribe(value => {
        this._interval = value;
      });
  }

  ngOnDestroy() {}

  startIncrement(): void {
    this.store.dispatch(HomeActions.startIncrement());
  }

  startDecrement(): void {
    this.store.dispatch(HomeActions.startDecrement());
  }

  stop(): void {
    this.store.dispatch(HomeActions.stop());
  }
}
