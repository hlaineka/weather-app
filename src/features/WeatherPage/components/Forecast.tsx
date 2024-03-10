import React from 'react';
import Text from '../../../components/Text';
import styled from 'styled-components';
import { CONTENT_WIDTH, SPACING, palette } from '../../../components/variables';
import { CityWeather } from '../../../store/reducers/weatherReducer';
import WeatherIcon from '../../../components/WeatherIcon';
import { getTimeString } from '../../../utils/timeUtils';

type Props = {
  selectedWeather: CityWeather;
};

const Forecast: React.FC<Props> = ({ selectedWeather }) => {
  return (
    <ForecastContainer>
      {selectedWeather.extendedWeatherData.map((forecast, index) => {
        return (
          <SingleForecastContainer key={`${forecast.name}-${index}-forcast`}>
            <UpperContainer>
              <Text variant="light" color="greyText">
                {getTimeString(forecast.dt)}
              </Text>
              <WeatherIcon
                iconCode={forecast.weather.icon}
                size={30}
              ></WeatherIcon>
              <Text variant="tempSmall">
                {forecast.main.temp} {'\u00B0'}C
              </Text>
            </UpperContainer>
            <LowerContainer>
              <Text variant="xs" color="greyText">
                {forecast.wind.speed.toFixed(2)} m/s
              </Text>
              <Text variant="xs" color="greyText">
                {forecast.main.humidity} %
              </Text>
              <Text variant="xs" color="greyText">
                {forecast.rain['3h']}
                mm
              </Text>
            </LowerContainer>
          </SingleForecastContainer>
        );
      })}
    </ForecastContainer>
  );
};

const ForecastContainer = styled.div`
  background-color: transparent;
  box-sizing: border-box;
  display: flex;
  height: fit-content;
  justify-content: space-between;
  margin-bottom: calc(${SPACING} * 1.5);
  margin-top: calc(${SPACING} / 2);
  max-width: ${CONTENT_WIDTH};
  padding: 0;
  position: relative;
  right: 0;
  width: 100%;
`;

const UpperContainer = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: calc(${SPACING} / 2);
  padding-top: calc(${SPACING} / 2);
  width: 100%;
`;

const LowerContainer = styled.div`
  align-items: center;
  background-color: ${palette.blueBackground};
  border-top: 1px solid ${palette.greyBorder};
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: calc(${SPACING} / 2);
  padding-top: calc(${SPACING} / 2);
  width: 100%;
`;

const SingleForecastContainer = styled.div`
  align-items: center;
  background-color: white;
  border: 1px solid ${palette.greyBorder};
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: flex-start;
  width: calc(20% - (${SPACING} / 2));
`;

export default Forecast;
