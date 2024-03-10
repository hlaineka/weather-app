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

  const cities = createCityList(dropdownSelection);

  return (
    <ContentContainer>
      <Dropdown
        setDropdownSelection={handlesetDropdownSelection}
        dropdownSelection={dropdownSelection}
      />
      {cities.map(city => {
        return (
          <>
            <CurrentWeather
              key={`current-weather-${city.value}`}
              selectedCity={city}
            />
            <Forecast key={`forecast-${city.value}`} selectedCity={city} />
          </>
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

export default WeatherContent;
