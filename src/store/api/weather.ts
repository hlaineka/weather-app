const baseUrl = 'https://api.openweathermap.org/data/2.5';

export const fetchCurrentWeatherData = async (lat: number, lng: number) => {
  const url = `${baseUrl}/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
  return await (await fetch(url)).json();
};

export const fetchForecastData = async (lat: number, lng: number) => {
  const url = `${baseUrl}/forecast?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

  return await (await fetch(url)).json();
};
