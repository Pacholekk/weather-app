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
  }[]; // tablica obiektów
  wind: {
    speed: number;
  };
  name: string;
}
