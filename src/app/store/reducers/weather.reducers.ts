import { AppState } from "@store/models/app-state.model";
import { createReducer, on } from "@ngrx/store";
import {
  clearWeatherData,
  getWeatherDataAction,
  getWeatherDataActionFailed,
  getWeatherDataActionSuccess,
} from "@store/actions/weather.actions";

const initialState: AppState = {
  weatherData: null,
  isLoading: false,
  error: null,
};

export const weatherReducers = createReducer(
  initialState,
  on(
    getWeatherDataAction,
    (state: AppState): AppState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getWeatherDataActionSuccess,
    (state: AppState, action): AppState => ({
      ...state,
      weatherData: action.weatherData,
      isLoading: false,
      error: null,
    })
  ),
  on(
    getWeatherDataActionFailed,
    (state: AppState, action): AppState => ({
      ...state,
      error: action.error,
    })
  ),
  on(
    clearWeatherData,
    (state: AppState): AppState => ({
      ...state,
      weatherData: null,
    })
  )
);
