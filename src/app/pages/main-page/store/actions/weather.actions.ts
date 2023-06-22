import {
  ReducerSections,
  ReducerStatuses,
} from "@pages/main-page/store/models/reducer";
import { createAction, props } from "@ngrx/store";
import { HttpErrorResponse } from "@angular/common/http";
import { IWeatherData } from "@core/services/weather/weather.type";
import { WeatherActions } from "@pages/main-page/store/models/weather-state.model";

export const getWeatherDataAction = createAction(
  `${ReducerSections.WEATHER} ${WeatherActions.getWeatherData} ${ReducerStatuses.INIT}`,
  props<{ city: string }>()
);

export const getWeatherDataActionSuccess = createAction(
  `${ReducerSections.WEATHER} ${WeatherActions.getWeatherData} ${ReducerStatuses.SUCCESS}`,
  props<{ weatherData: IWeatherData }>()
);

export const getWeatherDataActionFailed = createAction(
  `${ReducerSections.WEATHER} ${WeatherActions.getWeatherData} ${ReducerStatuses.FAILED}`,
  props<{ error: HttpErrorResponse }>()
);

export const clearWeatherData = createAction(
  `${ReducerSections.WEATHER} ${WeatherActions.clearWeatherData}`
);
