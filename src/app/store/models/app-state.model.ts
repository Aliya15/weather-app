import { IWeatherData } from "@core/services/weather/weather.type";
import { HttpErrorResponse } from "@angular/common/http";

export interface AppState {
  weatherData: IWeatherData | null;
  isLoading: boolean;
  error: HttpErrorResponse | null;
}

export const WEATHER_KEY = "weatherData";

export enum WeatherActions {
  getWeatherData = "getWeatherData",
  clearWeatherData = "clearWeatherData",
}
