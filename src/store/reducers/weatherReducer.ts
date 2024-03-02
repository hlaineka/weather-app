import { createSlice } from '@reduxjs/toolkit';
import { WeatherData } from '../../api/types';
import { fetchWeather, transformWeatherData } from '../fetchWeather';

export type CityWeather = {
  weatherData: WeatherData;
  extendedWeatherData: WeatherData[];
  name: string;
  name_plain: string;
};

export type WeatherState = {
  tampere: CityWeather;
  jyvaskyla: CityWeather;
  espoo: CityWeather;
  kuopio: CityWeather;
  isError: boolean;
};

const initialState: WeatherState = {
  tampere: {
    weatherData: {
      time: '',
      weather: {
        id: 0,
        main: '',
        description: '',
        icon: '',
      },
      main: {
        temp: 0,
        humidity: 0,
      },
      wind: {
        speed: 0,
      },
      rain: {
        '3h': 0,
      },
      name: '',
    },
    extendedWeatherData: [],
    name: 'Tampere',
    name_plain: 'tampere',
  },
  jyvaskyla: {
    weatherData: {
      time: '',
      weather: {
        id: 0,
        main: '',
        description: '',
        icon: '',
      },
      main: {
        temp: 0,
        humidity: 0,
      },
      wind: {
        speed: 0,
      },
      rain: {
        '3h': 0,
      },
      name: '',
    },
    extendedWeatherData: [],
    name: 'Jyväskylä',
    name_plain: 'jyvaskyla',
  },
  kuopio: {
    weatherData: {
      time: '',
      weather: {
        id: 0,
        main: '',
        description: '',
        icon: '',
      },
      main: {
        temp: 0,
        humidity: 0,
      },
      wind: {
        speed: 0,
      },
      rain: {
        '3h': 0,
      },
      name: '',
    },
    extendedWeatherData: [],
    name: 'Kuopio',
    name_plain: 'kuopio',
  },
  espoo: {
    weatherData: {
      time: '',
      weather: {
        id: 0,
        main: '',
        description: '',
        icon: '',
      },
      main: {
        temp: 0,
        humidity: 0,
      },
      wind: {
        speed: 0,
      },
      rain: {
        '3h': 0,
      },
      name: '',
    },
    extendedWeatherData: [],
    name: 'Espoo',
    name_plain: 'espoo',
  },
  isError: false,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchWeather.fulfilled, (state, action) => {
        const res = transformWeatherData(action.payload);

        switch (res.weather.name) {
          case 'Jyvaskyla': {
            state.jyvaskyla.weatherData = res.weather;
            state.jyvaskyla.extendedWeatherData = res.forecast;
            break;
          }
          case 'Espoo': {
            state.espoo.weatherData = res.weather;
            state.espoo.extendedWeatherData = res.forecast;
            break;
          }
          case 'Tampere': {
            state.tampere.weatherData = res.weather;
            state.tampere.extendedWeatherData = res.forecast;
            break;
          }
          case 'Kuopio': {
            state.kuopio.weatherData = res.weather;
            state.kuopio.extendedWeatherData = res.forecast;
            break;
          }
          default: {
            console.log(`not found ${res.weather.name}`);
            break;
          }
        }

        console.log('at the end of the addCase - res');
        console.log(res);
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .addCase(fetchWeather.rejected, (state, action) => {
        state.isError = true;
      });
  },
});

export default weatherSlice.reducer;
