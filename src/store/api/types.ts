export type WeatherData = {
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  rain: {
    '3h': number;
  };
  dt: number;
  name: string;
};

export type AllWeatherData = Array<WeatherData>;
