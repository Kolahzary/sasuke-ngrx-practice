import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "src/app/state";
import * as actions from "../../actions/counter.actions";
import { interval, Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch(actions.start({ interval: 1000 }));
  }

  ngOnDestroy() {
    this.store.dispatch(actions.stop());
  }
}
