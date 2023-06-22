import { createAction, props } from "@ngrx/store";
import { HttpErrorResponse } from "@angular/common/http";
import { IWeatherData } from "@shared/models/weather.model";

export enum WeatherActionTypes {
  GET_WEATHER_DATA = "[WEATHER] Get Weather Data",
  GET_WEATHER_DATA_SUCCESS = "[WEATHER] Get Weather Data Success",
  GET_WEATHER_DATA_FAIL = "[WEATHER] Get Weather Data Fail",
  CLEAR_WEATHER_DATA = "[WEATHER] Clear Weather Data",
}

export const getWeatherDataAction = createAction(
  WeatherActionTypes.GET_WEATHER_DATA,
  props<{ city: string }>()
);

export const getWeatherDataActionSuccess = createAction(
  WeatherActionTypes.GET_WEATHER_DATA_SUCCESS,
  props<{ weatherData: IWeatherData }>()
);

export const getWeatherDataActionFailed = createAction(
  WeatherActionTypes.GET_WEATHER_DATA_FAIL,
  props<{ error: HttpErrorResponse }>()
);

export const clearWeatherData = createAction(
  WeatherActionTypes.CLEAR_WEATHER_DATA
);
