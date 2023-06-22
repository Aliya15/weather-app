import { EnvironmentConfig } from "../typings/environment";
import { apiKey } from "../../apiKey";

export const environment: EnvironmentConfig = {
  production: true,
  apiUrl: "https://api.openweathermap.org/data/",
  apiKey: apiKey,
};
