import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { environment } from "@environments/environment";
import { ENV_CONFIG } from "@core/tokens/env-config.token";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { ApiHttpInterceptor } from "@core/interceptor/api-http.interceptor";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { OptionalModules } from "@core/modules/optional-modules/optional-modules";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainPageComponent } from "@pages/main-page/main-page.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { InputAutoresizeDirective } from "@core/directives/input-autoresize.directive";
import { WeatherEffects } from "@store/effects/weather.effects";
import { metaReducers, reducers } from "@store/reducers/reducers";
import { MatIconModule } from "@angular/material/icon";
import { GetWeatherIconPipe } from "./core/pipe/get-weather-icon.pipe";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MDBRootModule } from "angular-bootstrap-md";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    InputAutoresizeDirective,
    GetWeatherIconPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    EffectsModule.forRoot([WeatherEffects]),
    OptionalModules,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MDBRootModule,
  ],
  providers: [
    {
      provide: ENV_CONFIG,
      useValue: environment,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
