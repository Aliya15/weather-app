import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {apiKey} from "../../../../../apiKey";
import {ENV_CONFIG} from "@core/tokens/env-config.token";
import {EnvironmentConfig} from "@typings/environment";
import {IWeatherData} from "@shared/models/weather.model";

@Injectable({
    providedIn: "root",
})
export class WeatherService {
    private readonly openWeatherUrl: string = this.env.apiUrl + "2.5/";
    private readonly weatherUrl: string = "weather";

    constructor(
        private _http: HttpClient,
        @Inject(ENV_CONFIG) private readonly env: EnvironmentConfig
    ) {
    }

    getWeatherData(city: string): Observable<IWeatherData> {
        return this._http.get<IWeatherData>(
            `${this.openWeatherUrl}${this.weatherUrl}`,
            {params: {q: city, APPID: apiKey, units: "metric"}}
        );
    }
}
