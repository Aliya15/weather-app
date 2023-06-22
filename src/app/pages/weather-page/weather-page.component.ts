import {ChangeDetectionStrategy, Component, OnDestroy} from "@angular/core";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {selectWeatherData} from "@pages/weather-page/store/weather.selectors";
import {clearWeatherData, getWeatherDataAction,} from "@pages/weather-page/store/weather.actions";
import {IWeatherData} from "@shared/models/weather.model";
import {WeatherService} from "@pages/weather-page/services/weather.service";

@Component({
    selector: "app-weather-page",
    templateUrl: "./weather-page.component.html",
    styleUrls: ["./weather-page.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherPageComponent implements OnDestroy {
    readonly weatherData$: Observable<IWeatherData | null> =
        this._store.select(selectWeatherData);

    constructor(private _weatherService: WeatherService, private _store: Store) {
    }

    getWeatherData(city: string): void {
        if (!city.length) {
            this.clearLocationsData();
            return;
        }
        this._store.dispatch(getWeatherDataAction({city: city}));
    }

    clearLocationsData(): void {
        this._store.dispatch(clearWeatherData());
    }

    ngOnDestroy(): void {
        this.clearLocationsData();
    }
}
