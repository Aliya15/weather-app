import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState, WEATHER_KEY } from "@store/models/app-state.model";

export const selectFeature = createFeatureSelector<AppState>(WEATHER_KEY);

export const selectWeatherData = createSelector(
  selectFeature,
  (state: AppState) => state.weatherData
);
