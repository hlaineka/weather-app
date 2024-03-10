import React from 'react';
import Text from '../../../components/Text';
import styled from 'styled-components';
import { CONTENT_WIDTH, SPACING, palette } from '../../../components/variables';
import { CityWeather } from '../../../store/reducers/weatherReducer';
import { capitalize } from '../../../utils/stringUtils';
import WeatherIcon from '../../../components/WeatherIcon';
import { getDateString, getTimeString } from '../../../utils/timeUtils';

type Props = {
  selectedWeather: CityWeather;
};

const CurrentWeather: React.FC<Props> = ({ selectedWeather }) => {
  return (
    <CurrentWeatherContainer>
      <BasicInfoContainer>
        <CityNameContainer>
          <Text variant="h2">{selectedWeather.name}</Text>
          <Text variant="light" color="greyText">
            {capitalize(selectedWeather.weatherData.weather.description)}
          </Text>
        </CityNameContainer>
        <IconContainer>
          <WeatherIcon iconCode={selectedWeather.weatherData.weather.icon} />
          <Text variant="temp">
            {selectedWeather.weatherData.main.temp} {'\u00B0'}C
          </Text>
        </IconContainer>
      </BasicInfoContainer>
      <WeatherInfoContainer>
        <DateContainer>
          <Text variant="basic">
            {getDateString(selectedWeather.weatherData.dt)}
          </Text>
          <Text variant="light" color="greyText">
            {getTimeString(selectedWeather.weatherData.dt)}
          </Text>
        </DateContainer>
        <WeatherDetailsContainer>
          <Text variant="light" color="greyText">
            Wind: {selectedWeather.weatherData.wind.speed.toFixed(1)} m/s
          </Text>
          <Text variant="light" color="greyText">
            Humidy: {selectedWeather.weatherData.main.humidity} %
          </Text>
          <Text variant="light" color="greyText">
            Precipitation (3h):{' '}
            {selectedWeather.extendedWeatherData[0].rain
              ? selectedWeather.extendedWeatherData[0].rain['3h']
              : '0'}{' '}
            mm
          </Text>
        </WeatherDetailsContainer>
      </WeatherInfoContainer>
    </CurrentWeatherContainer>
  );
};

const CurrentWeatherContainer = styled.div`
  background-color: white;
  border: 1px solid ${palette.greyBorder};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin-top: calc(${SPACING} / 2);
  max-width: ${CONTENT_WIDTH};
  padding: ${SPACING};
  position: relative;
  right: 0;
  width: 100%;
`;

const BasicInfoContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  height: fit-content;
  justify-content: space-between;
  margin-bottom: calc(${SPACING} * 3);
  position: relative;
  right: 0;
  width: 100%;
`;

const WeatherInfoContainer = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex: 1 1 50px;
  height: 50%;
  justify-content: space-between;
  position: relative;
  right: 0;
  width: 100%;
`;

const CityNameContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: fit-content;
  position: relative;
  right: 0;
  width: 50%;
`;

const DateContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: fit-content;
  position: relative;
  right: 0;
  width: 50%;
`;

const WeatherDetailsContainer = styled.div`
  align-items: flex-end;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  position: relative;
  right: 0;
  width: 50%;
`;

const IconContainer = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: fit-content;
  justify-content: flex-end;
  position: relative;
  right: 0;
  width: 50%;
`;

export default CurrentWeather;
