import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainPageComponent } from "@pages/main-page/main-page.component";
import { StoreModule } from "@ngrx/store";
import { WEATHER_KEY } from "@pages/main-page/store/models/weather-state.model";
import { weatherFeature } from "@pages/main-page/store/reducers/weather.reducers";
import { EffectsModule } from "@ngrx/effects";
import { WeatherEffects } from "@pages/main-page/store/effects/weather.effects";
import { GetWeatherIconPipe } from "@core/pipe/get-weather-icon.pipe";
import { NumberToFixedPipe } from "@core/pipe/number-to-fixed.pipe";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MDBRootModule } from "angular-bootstrap-md";

@NgModule({
  declarations: [MainPageComponent, GetWeatherIconPipe, NumberToFixedPipe],
  imports: [
    CommonModule,
    StoreModule.forFeature(WEATHER_KEY, weatherFeature.reducer),
    EffectsModule.forFeature([WeatherEffects]),
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MDBRootModule,
  ],
  exports: [MainPageComponent],
})
export class MainPageModule {}
