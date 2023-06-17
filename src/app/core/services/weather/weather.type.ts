export interface IWeatherData {
  base: string;
  clouds: { all: 100 };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  name: string;
  sys: {
    type: number;
    id: number;
    country: "GB";
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: {
    id: number;
    main: "Clouds";
    description: "overcast clouds";
    icon: "04d";
  }[];
  wind: { speed: number; deg: number };
}
