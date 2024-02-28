import { Text } from '../../components/Text/Text';
import Header from '../../components/Header';
import styled from 'styled-components';
import { palette } from '../../components/variables';

const Weather = () => {
    const content = "weathers";
    return (
        <PageContainer>
            <Header />
            <Text>{content}</Text>
        </PageContainer>
    );

};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  max-width: 100%;
  width: 100%;
  min-height: 100vh;
  background-color: ${palette.background};

`;

export default Weather;