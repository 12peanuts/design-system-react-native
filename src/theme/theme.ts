import { Dimensions, ColorSchemeName } from 'react-native';
import type { Theme } from '@emotion/react';

const { width, height } = Dimensions.get('window');
const definedColors = {
  light: {
    primary: '#004581',
    secondary: '#018ABD',
    tertiary: '#97CBDC',
    inactive: '#EFEFEF',
    background: '#DDE8F0',
    gray100: '#FCFCFC',
    gray150: '#F5F5F5',
    gray200: '#EFEFEF',
    gray300: '#DFDFDF',
    gray350: '#C8C8C8',
    gray400: '#B7B7B7',
    gray500: '#949494',
    gray600: '#777777',
    gray700: '#555555',
    gray800: '#303030',
    gray900: '#111111',
    white: '#ffffff',
    black: '#000000',
    error: '#EE534F',
  },
  dark: {
    primary: '#7C8DA5',
    secondary: '#475B74',
    tertiary: '#E0E1DC',
    inactive: '#EFEFEF',
    background: '#1D2538',
    gray100: '#FCFCFC',
    gray150: '#F5F5F5',
    gray200: '#EFEFEF',
    gray300: '#DFDFDF',
    gray350: '#C8C8C8',
    gray400: '#B7B7B7',
    gray500: '#949494',
    gray600: '#777777',
    gray700: '#555555',
    gray800: '#303030',
    gray900: '#111111',
    white: '#ffffff',
    black: '#000000',
    error: '#EE534F',
  },
};

export function getGlobalTheme(systemTheme: ColorSchemeName): Theme {
  const colors = definedColors[systemTheme ?? 'dark'];
  return {
    colors,
    typography: {
      h1: {
        fontSize: '64px',
        fontWeight: 700,
      },
      h2: {
        fontSize: '48px',
        fontWeight: 700,
      },
      h3: {
        fontSize: '32px',
        fontWeight: 700,
      },
      h4: {
        fontSize: '24px',
        fontWeight: 700,
      },
      h5: {
        fontSize: '20px',
        fontWeight: 700,
      },
      h6: {
        fontSize: '18px',
        fontWeight: 700,
      },
      subtitle1: {
        fontSize: '16px',
        fontWeight: 600,
      },
      subtitle2: {
        fontSize: '14px',
        fontWeight: 600,
      },
      body1: {
        fontSize: '16px',
        fontWeight: 400,
      },
      body2: {
        fontSize: '14px',
        fontWeight: 400,
      },
      caption: {
        fontSize: '12px',
        fontWeight: 400,
      },
    },
    fontFamily: {
      en: {
        regular: '',
        medium: '',
        bold: '',
      },
      ko: {
        regular: '',
        medium: '',
        bold: '',
      },
    },
    size: {
      width,
      height,
    },
  };
}
