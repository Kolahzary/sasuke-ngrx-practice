import { Component, OnInit } from "@angular/core";
import { State } from "src/app/state";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  count: Observable<number>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.count = this.store.select(x => 1 / x.counter.count);
  }
}
