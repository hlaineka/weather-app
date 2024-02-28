import CSS from 'csstype';

export type TextVariant =
  | 'header'
  | 'boldArial'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'link'
  | 'linkHeader'
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
      fontFamily: '"arial-regular"',
      fontSize: '23pt',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '23pt',
      marginTop: '23pt',
      marginBottom: '23pt'
    }
  },
  boldArial: {
    element: 'span',
    styles: {
      fontFamily: '"arial-regular"',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: '1.5rem',
    },
  },
  h1: {
    element: 'h1',
    styles: {
      fontFamily: '"arial-regular"',
      fontSize: '1.5rem',
      fontStyle: 'normal',
      fontWeight: '700',
    },
  },
  h2: {
    element: 'h2',
    styles: {
      fontFamily: '"arial-regular"',
      fontSize: '1.5rem',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: '2.2rem',
    },
  },
  h3: {
    element: 'h3',
    styles: {
      fontFamily: '"arial-regular"',
      fontSize: '1.1rem',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: '1.6rem',
    },
  },
  label: {
    element: 'label',
    styles: {
      fontFamily: '"arial-regular"',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: '1.5rem',
    },
  },
  link: {
    element: 'span',
    styles: {
      fontFamily: '"arial-regular"',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: '60px',
    },
  },
  linkHeader: {
    element: 'span',
    styles: {
      fontFamily: '"arial-regular"',
      fontSize: '1.1rem',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: '60px',
    },
  },
  p: {
    element: 'p',
    styles: {
      fontFamily: '"arial-regular"',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '1.5rem',
    },
  },
};
