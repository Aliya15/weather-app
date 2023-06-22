import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "getWeatherIcon",
})
export class GetWeatherIconPipe implements PipeTransform {
  readonly baseWeatherUrl: string = "https://openweathermap.org/img/wn/";

  transform(icon: string): unknown {
    return `${this.baseWeatherUrl}${icon}.png`;
  }
}
