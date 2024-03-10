import CSS from 'csstype';

export type TextVariant =
  | 'header'
  | 'h1'
  | 'h2'
  | 'label'
  | 'p'
  | 'light'
  | 'temp'
  | 'tempSmall'
  | 'basic'
  | 'xs';
export type TextElement = 'a' | 'h1' | 'h2' | 'h3' | 'label' | 'p' | 'span';

type TextProp = {
  element: TextElement;
  styles: CSS.Properties;
};

export const variants: Record<TextVariant, TextProp> = {
  header: {
    element: 'h1',
    styles: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '23px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '23px',
      marginTop: '23px',
      marginBottom: '23px',
    },
  },
  h1: {
    element: 'h1',
    styles: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '23px',
      fontStyle: 'normal',
      fontWeight: '400',
    },
  },
  h2: {
    element: 'h2',
    styles: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '19px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '19px',
      marginBottom: '10px',
    },
  },
  label: {
    element: 'label',
    styles: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '13px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '13px',
    },
  },
  p: {
    element: 'p',
    styles: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '1.5rem',
    },
  },
  light: {
    element: 'span',
    styles: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '13px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '13px',
    },
  },
  temp: {
    element: 'span',
    styles: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '26px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '26px',
      marginLeft: '13px',
    },
  },
  tempSmall: {
    element: 'span',
    styles: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '15px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '15px',
    },
  },
  basic: {
    element: 'span',
    styles: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '15px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '15px',
      marginBottom: '5px',
    },
  },
  xs: {
    element: 'span',
    styles: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '10px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '10px',
      marginBottom: '3px',
    },
  },
};
