import {
  WeatherState,
  WEATHER_KEY,
} from "@pages/main-page/store/models/weather-state.model";

export interface State {
  [WEATHER_KEY]: WeatherState;
}
