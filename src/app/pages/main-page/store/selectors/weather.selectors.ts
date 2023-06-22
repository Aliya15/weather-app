import { createFeatureSelector, createSelector } from "@ngrx/store";
import {
  WEATHER_KEY,
  WeatherState,
} from "@pages/main-page/store/models/weather-state.model";

export const selectFeature = createFeatureSelector<WeatherState>(WEATHER_KEY);

export const selectWeatherData = createSelector(
  selectFeature,
  (state: WeatherState) => state.weatherData
);
