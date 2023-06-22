import {createFeature, createReducer, on} from "@ngrx/store";
import {
    clearWeatherData,
    getWeatherDataAction,
    getWeatherDataActionFailed,
    getWeatherDataActionSuccess,
} from "@pages/weather-page/store/weather.actions";
import {HttpErrorResponse} from "@angular/common/http";
import {IWeatherData} from "@shared/models/weather.model";


export interface WeatherState {
    weatherData: IWeatherData | null;
    isLoading: boolean;
    error: HttpErrorResponse | null;
}

export const WEATHER_KEY = "weatherData";

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

export const {name, reducer, selectWeatherData} = weatherFeature;
