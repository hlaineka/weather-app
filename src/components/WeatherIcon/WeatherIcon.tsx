import React from 'react';
import styled from 'styled-components';

type Props = {
  iconCode: string;
  size?: number;
};

export const WeatherIcon: React.FC<Props> = ({ iconCode, size = 62 }) => {
  const url = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <IconContainer>
      <Icon url={url} size={size} />
    </IconContainer>
  );
};

const IconContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  position: relative;
  width: fit-content;
`;

const Icon = styled.span<{ url: string; size: number }>`
  background-color: transparent;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
`;
