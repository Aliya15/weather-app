export interface IWeatherData {
  base: string;
  clouds: { all: 100 };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: IMainWeatherData;
  name: string;
  sys: ISysData;
  timezone: number;
  visibility: number;
  weather: IWeatherInformation[];
  wind: IWindData;
}

export interface IMainWeatherData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface ISysData {
  type: number;
  id: number;
  country: "GB";
  sunrise: number;
  sunset: number;
}

export interface IWeatherInformation {
  id: number;
  main: "Clouds";
  description: "overcast clouds";
  icon: "04d";
}

export interface IWindData {
  speed: number;
  deg: number;
}
