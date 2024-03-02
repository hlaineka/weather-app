//import Spinner from './components/Spinner';
import React from 'react';
import styled from 'styled-components';
import Weather from './features/WeatherPage';

const App = () => {
  return (
    //const isLoading = useIsLoading();
    <AppWrapper>
      <Weather />
    </AppWrapper>
    // or <Spinner variant="large" />
  );
};

const AppWrapper = styled.div`
  overflow: hidden;
`;

export default App;
