export interface WeatherData {
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[]; // object array
  wind: {
    speed: number;
  };
  name: string; // name of the city
}
