import { ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import {
  selectWeatherData,
  selectWeatherDataError,
} from "@pages/weather-page/store/weather.selectors";
import {
  clearWeatherData,
  getWeatherDataAction,
} from "@pages/weather-page/store/weather.actions";
import { IWeatherData } from "@shared/models/weather.model";
import { WeatherService } from "@pages/weather-page/services/weather.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-weather-page",
  templateUrl: "./weather-page.component.html",
  styleUrls: ["./weather-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherPageComponent implements OnDestroy {
  readonly weatherData$: Observable<IWeatherData | null> =
    this._store.select(selectWeatherData);
  readonly selectWeatherDataError$: Observable<HttpErrorResponse | null> =
    this._store.select(selectWeatherDataError);
  readonly minSearchThreshold = 2;

  constructor(private _weatherService: WeatherService, private _store: Store) {}

  getWeatherData(city: string): void {
    if (!city.length || city.length <= this.minSearchThreshold) {
      this.clearLocationsData();
    } else {
      this._store.dispatch(getWeatherDataAction({ city: city }));
    }
  }

  clearLocationsData(): void {
    this._store.dispatch(clearWeatherData());
  }

  ngOnDestroy(): void {
    this.clearLocationsData();
  }
}
