import { tap } from "rxjs/operators";
import { increment } from "./actions/counter.actions";
import { ofType } from "@ngrx/effects";
import { TestBed, inject } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { Observable } from "rxjs";

import { AppEffects } from "./app.effects";

describe("AppEffects", () => {
  let actions$: Observable<any>;
  let effects: AppEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get<AppEffects>(AppEffects);
  });

  it("should be created", () => {
    expect(effects).toBeTruthy();
  });

  xdescribe("IntervalEffect", () => {
    it("should emit increment on start", done => {
      actions$.pipe(
        ofType(increment),
        tap(x => done())
      );
    });
  });
});
