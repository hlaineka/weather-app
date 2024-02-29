import { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Dropdown from '../../components/Dropdown';
import { Text } from '../../components/Text/Text';
import { CONTENT_WIDTH, palette } from '../../components/variables';
import { Option } from '../../components/Dropdown/variables';

const Weather = () => {
  const [dropdownSelection, setDropdownSelection] = useState({
    value: 'all',
    label: 'Kaikki kaupungit',
  });

  const handlesetDropdownSelection = (selected: Option) => {
    setDropdownSelection(selected);
  };

  const content = 'weathers';
  return (
    <PageContainer>
      <Header />
      <ContentContainer>
        <Dropdown
          setDropdownSelection={handlesetDropdownSelection}
          dropdownSelection={dropdownSelection}
        />
        <Text>{content}</Text>
      </ContentContainer>
    </PageContainer>
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

const ContentContainer = styled.div`
  align-items: center;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 1rem;
  width: ${CONTENT_WIDTH};
`;

export default Weather;
