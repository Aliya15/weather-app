import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, debounceTime, map, of, switchMap } from "rxjs";
import { Injectable } from "@angular/core";
import {
  getWeatherDataAction,
  getWeatherDataActionFailed,
  getWeatherDataActionSuccess,
} from "@pages/weather-page/store/weather.actions";
import { Store } from "@ngrx/store";
import { WeatherService } from "@pages/weather-page/services/weather.service";

@Injectable()
export class WeatherEffects {
  constructor(
    private _actions$: Actions,
    private _weatherService: WeatherService,
    private _store: Store
  ) {}

  getWeatherData$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(getWeatherDataAction),
      debounceTime(1000),
      switchMap((action) => {
        return this._weatherService.getWeatherData(action.city).pipe(
          map((weatherData) => {
            return getWeatherDataActionSuccess({ weatherData });
          }),
          catchError((error) => {
            return of(getWeatherDataActionFailed({ error }));
          })
        );
      })
    );
  });
}
