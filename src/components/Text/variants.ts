import CSS from 'csstype';

export type TextVariant =
  | 'header'
  | 'h1'
  | 'h2'
  | 'label'
  | 'p';
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
      fontSize: '23pt',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '23pt',
      marginTop: '23pt',
      marginBottom: '23pt'
    }
  },
  h1: {
    element: 'h1',
    styles: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '23pt',
      fontStyle: 'normal',
      fontWeight: '400',
    },
  },
  h2: {
    element: 'h2',
    styles: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '19pt',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '19pt',
    },
  },
  label: {
    element: 'label',
    styles: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '13pt',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '13pt',
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
};
