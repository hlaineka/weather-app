import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Dropdown from '../../../components/Dropdown';
import {
  CONTENT_WIDTH,
  MAX_CONTENT_WIDTH,
  SPACING,
} from '../../../components/variables';
import { Option, options } from '../../../components/Dropdown/variables';
import React from 'react';
import { useAppDispatch } from '../../../store/hooks/hooks';
import { fetchWeather } from '../../../store/fetchWeather';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../store/store';
import { CityWeather } from '../../../store/reducers/weatherReducer';
import Text from '../../../components/Text';

const createCityList = (selected: Option) => {
  if (selected.value == 'all') {
    return options.slice(1, 5);
  }
  const returnable: Array<Option> = [];
  options.map(option => {
    if (option.value == selected.value) {
      returnable.push(option);
    }
  });
  return returnable;
};

const WeatherContent = () => {
  const [dropdownSelection, setDropdownSelection] = useState<Option>({
    value: 'all',
    label: 'Kaikki kaupungit',
    lat: 0,
    lng: 0,
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    getAllCityWeathers();
  }, []);

  const handlesetDropdownSelection = (selected: Option) => {
    setDropdownSelection(selected);
    if (selected.lat == 0 && selected.lng == 0) {
      getAllCityWeathers();
    } else {
      dispatch(fetchWeather({ lat: selected.lat, lng: selected.lng }));
    }
  };

  const getAllCityWeathers = () => {
    options.forEach(option => {
      dispatch(fetchWeather({ lat: option.lat, lng: option.lng }));
    });
  };

  const { weather, isInitial, isError } = useSelector((store: AppStore) => ({
    weather: store.weather,
    isInitial: store.app.isInitial,
    isError: store.weather.isError,
  }));

  useEffect(() => {
    if (isError) {
      console.log('Cannot load weather for this place');
    }
  }, [isError]);

  if (isInitial) return <></>;

  const cities = createCityList(dropdownSelection);

  return (
    <ContentContainer>
      <Dropdown
        setDropdownSelection={handlesetDropdownSelection}
        dropdownSelection={dropdownSelection}
      />
      {cities.map(city => {
        const key = city.value;
        const keyTyped = key as keyof typeof Option;
        const selectedWeather: CityWeather = weather[keyTyped];

        if (
          selectedWeather.weatherData.dt == 0 ||
          !selectedWeather.extendedWeatherData[0]
        )
          return (
            <div key={`current-weather-container-${city.value}`}>
              <Text>Error on loading ${city.value}</Text>
            </div>
          );

        return (
          <CityContainer
            className={`current-weather-${city.value}`}
            key={`current-weather-container-${city.value}`}
          >
            <CurrentWeather
              key={`current-weather-${city.value}`}
              selectedWeather={selectedWeather}
            />
            <Forecast
              key={`forecast-${city.value}`}
              selectedWeather={selectedWeather}
            />
          </CityContainer>
        );
      })}
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  align-items: center;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: ${SPACING};
  max-width: ${MAX_CONTENT_WIDTH};
  width: ${CONTENT_WIDTH};
`;

const CityContainer = styled.div`
  align-items: center;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0;
  width: 100%;
`;

export default WeatherContent;
