import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { IWeatherData } from "@shared/models/weather.model";

@Component({
  selector: "app-weather-data-card",
  templateUrl: "./weather-data-card.component.html",
  styleUrls: ["./weather-data-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherDataCardComponent {
  @Input() weatherData: IWeatherData | null = null;
}
