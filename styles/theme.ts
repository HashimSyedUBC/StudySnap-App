import { toRem } from '../src/utils/toRem';

export const colors = {
  mainColor: '#F4BA99',
  broderGray: '#ADAAAA',
  darkGray: '#5A5A5A',
  defaultWhite: '#FFFFFF',
  defaultBlack: '#000000',
  interviewPurple: '#7871D0',
  oaBlue: '#9FE4F3',
  rejectedRed: '#EA4D43',
  offerGreen: '#00F946',
  lightGray: '#E1DDDD',
};

export const fonts = {
  fontName: {
    H12: `font-size: ${toRem(
      12,
    )}; font-weight: bold; font-family: comfortaa;`,
  },
  H1000: `font-size: ${toRem(
    96,
  )}; font-weight: 300; font-family: comfortaa; line-height: ${toRem(96)};`,
  H900: `font-size: ${toRem(
    72,
  )}; font-weight: 300; font-family: comfortaa; line-height: ${toRem(96)};`,
  H800: `font-size: ${toRem(
    64,
  )}; font-weight: 300; font-family: comfortaa; line-height: ${toRem(96)};`,
  H700: `font-size: ${toRem(
    40,
  )}; font-weight: 300; font-family: comfortaa; line-height: ${toRem(56)};`,
  H601: `font-size: ${toRem(
    32,
  )}; font-weight: 500; font-family: comfortaa; line-height: ${toRem(48)};`,
  H600: `font-size: ${toRem(
    32,
  )}; font-weight: 300; font-family: comfortaa; line-height: ${toRem(48)};`,
  H500: `font-size: ${toRem(
    24,
  )}; font-weight: 300; font-family: comfortaa; line-height: ${toRem(36)};`,
  H400: `font-size: ${toRem(
    20,
  )}; font-weight: 300; font-family: comfortaa; line-height: ${toRem(32)};`,
  H300: `font-size: ${toRem(
    16,
  )}; font-weight: 300; font-family: comfortaa; line-height: ${toRem(24)};`,
  H200: `font-size: ${toRem(
    16,
  )}; font-weight: 100; font-family: comfortaa; line-height: ${toRem(24)};`,
  H100: `font-size: ${toRem(
    12,
  )}; font-weight: 300; font-family: comfortaa; line-height: ${toRem(16)};`,
  subtitle: `font-size: ${toRem(20)}; font-weight: 300; font-family: comfortaa;`,
  body: `font-size: ${toRem(
    20,
  )}; font-weight: 300; font-family: comfortaa; line-height: ${toRem(32)};`,
  bodyCloudDesc: `font-size: ${toRem(
    18,
  )}; font-weight: 300; font-family: comfortaa; line-height: ${toRem(28)};`,
  bodyLarge: `font-size: ${toRem(
    16,
  )}; font-weight: 300; font-family: comfortaa; line-height: ${toRem(24)};`,
  bodyMedium: `font-size: ${toRem(14)}; font-weight: 300; font-family: comfortaa;`,
  bodySmall: `font-size: ${toRem(
    12,
  )}; font-weight: 300; font-family: comfortaa; line-height: ${toRem(16)};`,
  cloudOps: {
    CoH900: `font-size: ${toRem(
      72,
    )}; font-weight: 800; font-family: big-caslon-fb; line-height: ${toRem(
      96,
    )};`,
    CoH700: `font-size: ${toRem(
      40,
    )}; font-weight: 800; font-family: big-caslon-fb; line-height: ${toRem(
      56,
    )};`,
    CoH300: `font-size: ${toRem(
      32,
    )}; font-weight: 800; font-family: big-caslon-fb; line-height: ${toRem(
      48,
    )};`,
    CoH500: `font-size: ${toRem(
      24,
    )}; font-weight: 500; font-family: comfortaa; line-height: ${toRem(36)};`,
    CoH400: `font-size: ${toRem(
      20,
    )}; font-weight: 800; font-family: big-caslon-fb; line-height: ${toRem(
      32,
    )};`,
    CoH600: `font-size: ${toRem(
      20,
    )}; font-weight: 500; font-family: comfortaa; line-height: ${toRem(32)};`,
    CoBodyLarge: `font-size: ${toRem(
      18,
    )}; font-weight: 300; font-family: comfortaa; line-height: ${toRem(28)};`,
  },
};

export const breakpoints = {
  tablet: '1080px',
  desktop: '1920px',
};
