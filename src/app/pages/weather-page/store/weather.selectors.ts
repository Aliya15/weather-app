import { createFeatureSelector, createSelector } from "@ngrx/store";
import {
  WEATHER_KEY,
  WeatherState,
} from "@pages/weather-page/store/weather.reducers";

export const selectFeature = createFeatureSelector<WeatherState>(WEATHER_KEY);

export const selectWeatherData = createSelector(
  selectFeature,
  (state: WeatherState) => state.weatherData
);

export const selectWeatherDataError = createSelector(
  selectFeature,
  (state: WeatherState) => state.error
);
