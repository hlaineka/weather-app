import React, { useEffect } from 'react';
import { Text } from '../../../components/Text/Text';
import { AppStore } from '../../../store/store';
import { useSelector } from 'react-redux';

const WeatherData: React.FC = () => {
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

  console.log(weather);

  return <Text>säädata haettu</Text>;
};

export default WeatherData;
