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

export const SPACING = '15px';
export const CONTENT_WIDTH = `calc(100vw - (2 * ${SPACING}))`;
export const MAX_CONTENT_WIDTH = '550px';
