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
import { OptionalModules } from "@core/modules/optional-modules/optional-modules";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MDBRootModule } from "angular-bootstrap-md";
import { MainPageModule } from "@pages/main-page/main-page.module";
import { EffectsModule } from "@ngrx/effects";
import { WeatherEffects } from "@pages/main-page/store/effects/weather.effects";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot({}),
    OptionalModules,
    BrowserAnimationsModule,
    MainPageModule,
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
