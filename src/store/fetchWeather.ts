/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { WeatherData } from './api/types';
import { fetchForecastData, fetchCurrentWeatherData } from './api/weather';
import { getTimeString } from '../utils/timeUtils';
import { kelvinToCelcius } from '../utils/unitConversion';
import { setIsInitial, setIsLoading } from './reducers/appReducer';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (
    city: { lat: number; lng: number },
    { dispatch, rejectWithValue, fulfillWithValue },
  ) => {
    dispatch(setIsLoading(true));

    try {
      const res = await Promise.all([
        fetchCurrentWeatherData(city.lat, city.lng),
        fetchForecastData(city.lat, city.lng),
      ]);
      dispatch(setIsLoading(false));

      if (res[0].cod === 200) {
        dispatch(setIsInitial(false));
        return res;
      }
      return rejectWithValue(res[0].message);
    } catch {
      dispatch(setIsLoading(false));
      return rejectWithValue('Error');
    }
  },
);

export const transformWeatherData = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  res: any,
): {
  weather: WeatherData;
  forecast: WeatherData[];
} => {
  const weather = res[0] as WeatherData;
  const forecast: WeatherData[] = [];

  weather.weather = res[0].weather[0];
  weather.main = {
    ...weather.main,
    temp: kelvinToCelcius(weather.main.temp),
  };
  weather.name = res[1].city.name;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  res[1].list.forEach((i: any, index: number) => {
    if (index < 5) {
      forecast.push({
        weather: {
          id: i.weather[0].id,
          main: i.weather[0].main,
          description: i.weather[0].description,
          icon: i.weather[0].icon,
        },
        main: {
          temp: kelvinToCelcius(i.main.temp),
          humidity: i.main.humidity,
        },
        wind: {
          speed: i.wind.speed,
        },
        rain: {
          '3h': i.rain ? i.rain['3h'] : 0,
        },
        dt: i.dt,
        name: weather.name,
      });
    }
  });

  return {
    weather,
    forecast,
  };
};
