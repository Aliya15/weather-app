import { createFeature, createReducer, on } from "@ngrx/store";
import {
  clearWeatherData,
  getWeatherDataAction,
  getWeatherDataActionFailed,
  getWeatherDataActionSuccess,
} from "@pages/main-page/store/actions/weather.actions";
import { WeatherState } from "@pages/main-page/store/models/weather-state.model";

const initialState: WeatherState = {
  weatherData: null,
  isLoading: false,
  error: null,
};

export const weatherFeature = createFeature({
  name: "weather",
  reducer: createReducer(
    initialState,
    on(
      getWeatherDataAction,
      (state: WeatherState): WeatherState => ({
        ...state,
        isLoading: true,
      })
    ),
    on(
      getWeatherDataActionSuccess,
      (state: WeatherState, action): WeatherState => ({
        ...state,
        weatherData: action.weatherData,
        isLoading: false,
        error: null,
      })
    ),
    on(
      getWeatherDataActionFailed,
      (state: WeatherState, action): WeatherState => ({
        ...state,
        error: action.error,
      })
    ),
    on(
      clearWeatherData,
      (state: WeatherState): WeatherState => ({
        ...state,
        weatherData: null,
      })
    )
  ),
});

export const { name, reducer, selectWeatherData } = weatherFeature;
