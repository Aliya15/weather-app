import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { AppState, WEATHER_KEY } from "@store/models/app-state.model";
import { weatherReducers } from "@store/reducers/weather.reducers";
import { environment } from "@environments/environment";

export interface State {
  [WEATHER_KEY]: AppState;
}

export const reducers: ActionReducerMap<State> = {
  [WEATHER_KEY]: weatherReducers,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
