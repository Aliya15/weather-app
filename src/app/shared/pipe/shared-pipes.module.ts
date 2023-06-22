import {NgModule} from '@angular/core';
import {GetWeatherIconPipe} from "@shared/pipe/get-weather-icon.pipe";
import {NumberToFixedPipe} from "@shared/pipe/number-to-fixed.pipe";

@NgModule({
    declarations: [GetWeatherIconPipe, NumberToFixedPipe],
    exports: [GetWeatherIconPipe, NumberToFixedPipe],
})
export class SharedPipesModule {
}
