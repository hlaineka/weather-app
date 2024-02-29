import { useState } from 'react';
import { Text } from '../../components/Text/Text';
import Header from '../../components/Header';
import Dropdown from '../../components/Dropdown';
import styled from 'styled-components';
import { CONTENT_WIDTH, palette } from '../../components/variables';
import { Option } from '../../components/Dropdown/variables';

const Weather = () => {
    const [dropdownSelection, setDropdownSelection] = useState({value: "all",
    label: "Kaikki kaupungit"});

    const handlesetDropdownSelection = (selected: Option) => {
        setDropdownSelection(selected);
    };

    const content = "weathers";
    return (
        <PageContainer>
            <Header />
            <ContentContainer>
                <Dropdown setDropdownSelection={handlesetDropdownSelection} dropdownSelection={dropdownSelection} />
                <Text>{content}</Text>
            </ContentContainer>
        </PageContainer>
    );

};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  width: 100%;
  min-height: 100vh;
  background-color: ${palette.background};

`;

const ContentContainer = styled.div`
    margin: 1rem;
    background-color: transparent;
    width: ${CONTENT_WIDTH};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export default Weather;