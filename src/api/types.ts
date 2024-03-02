export type WeatherData = {
  time: string;
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
  name: string;
};

export type AllWeatherData = Array<WeatherData>;
