import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WeatherPageComponent } from "@pages/weather-page/weather-page.component";
import { StoreModule } from "@ngrx/store";
import {WEATHER_KEY, weatherFeature} from "@pages/weather-page/store/weather.reducers";
import { EffectsModule } from "@ngrx/effects";
import { WeatherEffects } from "@pages/weather-page/store/weather.effects";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MDBRootModule } from "angular-bootstrap-md";
import {WeatherPageRoutingModule} from "@pages/weather-page/weather-page-routing.module";
import { WeatherDataCardComponent } from './components/weather-data-card/weather-data-card.component';
import {SharedPipesModule} from "@shared/pipe/shared-pipes.module";

@NgModule({
  declarations: [WeatherPageComponent, WeatherDataCardComponent],
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
    WeatherPageRoutingModule,
    SharedPipesModule
  ],
  exports: [WeatherPageComponent],
})
export class WeatherPageModule {}
