import styled from 'styled-components';
import Header from '../../components/Header';
import { Text } from '../../components/Text/Text';
import { palette } from '../../components/variables';
import { AppStore } from '../../store/store';
import React from 'react';
import { useAppSelector } from '../../store/hooks/hooks';
import WeatherContent from './components/WeatherContent';

const Weather = () => {
  const { loading } = useAppSelector((state: AppStore) => ({
    loading: state.app.isLoading,
  }));

  return (
    <>
      {loading && <Text>loading..</Text>}
      <PageContainer>
        <Header />
        <WeatherContent />
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  align-items: center;
  background-color: ${palette.background};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  min-height: 100vh;
  width: 100%;
`;

export default Weather;
