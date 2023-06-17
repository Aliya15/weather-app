import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IWeatherData } from "@core/services/weather/weather.type";
import { Observable } from "rxjs";
import {apiKey} from "../../../../../apiKey";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  openWeatherUrl: string = "https://api.openweathermap.org/data/2.5/";
  weatherUrl: string = "weather";

  constructor(private _http: HttpClient) {}

  getWeatherData(city: string): Observable<IWeatherData> {
    return this._http.get<IWeatherData>(
      `${this.openWeatherUrl}${this.weatherUrl}`, {params: {q: city, APPID: apiKey, units: 'metric'}}
    );
  }
}
