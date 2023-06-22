import { ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core";
import { WeatherService } from "@core/services/weather/weather.service";
import { Observable } from "rxjs";
import { IWeatherData } from "@core/services/weather/weather.type";
import { Store } from "@ngrx/store";
import { selectWeatherData } from "@pages/main-page/store/selectors/weather.selectors";
import {
  clearWeatherData,
  getWeatherDataAction,
} from "@pages/main-page/store/actions/weather.actions";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnDestroy {
  weatherData$: Observable<IWeatherData | null> =
    this._store.select(selectWeatherData);

  constructor(private _weatherService: WeatherService, private _store: Store) {}

  getWeatherData(city: string): void {
    if (!city.length) {
      this.clearLocationsData();
      return;
    }
    this._store.dispatch(getWeatherDataAction({ city: city }));
  }

  clearLocationsData() {
    this._store.dispatch(clearWeatherData());
  }

  ngOnDestroy(): void {
    this.clearLocationsData();
  }
}
