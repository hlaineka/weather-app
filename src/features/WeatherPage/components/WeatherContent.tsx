import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Dropdown from '../../../components/Dropdown';
import { CONTENT_WIDTH } from '../../../components/variables';
import { Option, options } from '../../../components/Dropdown/variables';
import React from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { fetchWeather } from '../../../store/fetchWeather';
import WeatherData from './WeatherData';

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

  return (
    <ContentContainer>
      <Dropdown
        setDropdownSelection={handlesetDropdownSelection}
        dropdownSelection={dropdownSelection}
      />
      <WeatherData />
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  align-items: center;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 1rem;
  width: ${CONTENT_WIDTH};
`;

export default WeatherContent;
