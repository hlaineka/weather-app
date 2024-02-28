import { css, keyframes } from 'styled-components';

export type Color = keyof typeof palette;

export const palette = {
  blue: '#00A5E5',
  blueBackground: '#E5F6FD',
  white: '#FFFFFF',
  background: '#F8F9FA',
  black: '#262626',
  greyText: '#70757A',
  greyBorder: '#E6E6E6',
};

export const MOBILE_TRESHOLD = 600;
export const breakpoints = {
  mobile: `${MOBILE_TRESHOLD}px`,
};
