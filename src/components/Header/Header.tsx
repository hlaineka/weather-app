import React from 'react';
import styled from 'styled-components';
import { Text } from '../Text/Text';
import { palette } from '../variables';

export const Header = () => {
  const content = 'Säätutka';
  return (
    <HeaderContainer>
      <Text variant="header">{content}</Text>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  background-color: white;
  border: 1px solid ${palette.greyBorder};
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  max-width: 100%;
  width: 100%;
`;
