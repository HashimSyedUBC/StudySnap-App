import { toRem } from '../src/utils/toRem';

export const colors = {
  mainColor: '#A6D8FD',
  hoverBlack: '#4D4B4B',
  buttonHover: '#B6E0FF',
  buttonRegular: '#67BAF6',
  superLighBlue: '#DAEFFF',
  grey: '#F2F2F2',
  rejectedRed: '#FF7373',
  borderGray: '#7B7B7B',
};

export const fonts = {
  Bolded48: `font-size: ${toRem(
    48,
  )}; font-weight: 300; font-family: roboto black; line-height: ${toRem(50)};`,
  Bolded28: `font-size: ${toRem(
    28,
  )}; font-weight: 300; font-family: roboto black; line-height: ${toRem(50)};`,
  Bolded24: `font-size: ${toRem(
    24,
  )}; font-weight: 300; font-family: roboto black; line-height: ${toRem(32)};`,
  Bolded12: `font-size: ${toRem(
    12,
  )}; font-weight: 300; font-family: roboto black; line-height: ${toRem(16)};`,
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
    48,
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
