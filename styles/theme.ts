import { toRem } from '../src/utils/toRem';

export const colors = {
  mainColor: '#A6D8FD',
  white: "#00000",
  hoverBlack: '#4D4B4B',
  buttonHover: '#B6E0FF',
  buttonRegular: '#67BAF6',
  superLighBlue: '#DAEFFF',
  grey: '#F2F2F2',
  rejectedRed: '#FF7373',
  borderGray: '#7B7B7B',
  courseHover: '#55ABE9',
  shadowOrange: '#fdcba6',
  success: '#4CAF50', // A crisp, friendly green
  successBackground: '#E8F5E9', // A very light green
  error: '#F44336', // A vibrant, noticeable red
  errorBackground: '#FFEBEE', // A soft red
  primary: '#A6D8FD',
  secondary: '#6c757d',
  tertiary: '#17a2b8',
  text: '#333333',
  textLight: '#6c757d',
  codeBackground: '#f8f9fa',
  border: '#dee2e6',
  tableHeader: '#e9ecef',
};
export const fonts = {
  SemiBolded24: `font-size: ${toRem(24)}; font-weight: 600; font-family: 'roboto thin', sans-serif; line-height: ${toRem(32)};`,
  SemiBolded18: `font-size: ${toRem(18)}; font-weight: 600; font-family: 'roboto thin', sans-serif; line-height: ${toRem(24)};`,
  Bolded20: `font-size: ${toRem(20)}; font-weight: 700; font-family: 'roboto thin', sans-serif; line-height: ${toRem(28)};`,
  Bolded48: `font-size: ${toRem(48)}; font-weight: 700; font-family: 'roboto thin', sans-serif; line-height: ${toRem(50)};`,
  Bolded56: `font-size: ${toRem(56)}; font-weight: 700; font-family: 'roboto thin', sans-serif; line-height: ${toRem(58)};`,
  Bolded28: `font-size: ${toRem(28)}; font-weight: 700; font-family: 'roboto thin', sans-serif; line-height: ${toRem(50)};`,
  SemiBolded32: `font-size: ${toRem(32)}; font-weight: 600; font-family: 'roboto thin', sans-serif; line-height: ${toRem(34)};`,
  Bolded24: `font-size: ${toRem(24)}; font-weight: 700; font-family: 'roboto thin', sans-serif; line-height: ${toRem(32)};`,
  Bolded12: `font-size: ${toRem(12)}; font-weight: 700; font-family: 'roboto thin', sans-serif; line-height: ${toRem(16)};`,
  SemiBolded20: `font-size: ${toRem(20)}; font-weight: 600; font-family: 'roboto thin', sans-serif; line-height: ${toRem(32)};`,

  actual_bold:`font-weight: 600; font-family: 'roboto bold', sans-serif; line-height: ${toRem(32)};`,
  
  H1000: `font-size: ${toRem(96)}; font-weight: 700; font-family: 'roboto thin', sans-serif; line-height: ${toRem(96)};`,
  H900: `font-size: ${toRem(72)}; font-weight: 700; font-family: 'roboto thin', sans-serif; line-height: ${toRem(96)};`,
  H800: `font-size: ${toRem(64)}; font-weight: 700; font-family: 'roboto thin', sans-serif; line-height: ${toRem(96)};`,
  H700: `font-size: ${toRem(48)}; font-weight: 700; font-family: 'roboto thin', sans-serif; line-height: ${toRem(56)};`,
  H601: `font-size: ${toRem(32)}; font-weight: 700; font-family: 'roboto thin', sans-serif; line-height: ${toRem(48)};`,
  H600: `font-size: ${toRem(32)}; font-weight: 700; font-family: 'roboto thin', sans-serif; line-height: ${toRem(48)};`,
  H550: `font-size: ${toRem(28)}; font-weight: 700; font-family: 'roboto thin', sans-serif; line-height: ${toRem(36)};`,
  H500: `font-size: ${toRem(24)}; font-weight: 700; font-family: 'roboto thin', sans-serif; line-height: ${toRem(36)};`,
  H400: `font-size: ${toRem(20)}; font-weight: 700; font-family: 'roboto thin', sans-serif; line-height: ${toRem(32)};`,
  H300: `font-size: ${toRem(16)}; font-weight: 700; font-family: 'roboto thin', sans-serif; line-height: ${toRem(24)};`,
  H200: `font-size: ${toRem(16)}; font-weight: 700; font-family: 'roboto thin', sans-serif; line-height: ${toRem(24)};`,
  H100: `font-size: ${toRem(12)}; font-weight: 700; font-family: 'roboto thin', sans-serif; line-height: ${toRem(16)};`,
  subtitle: `font-size: ${toRem(20)}; font-weight: 700; font-family: 'roboto thin', sans-serif;`,
  body: `font-size: ${toRem(20)}; font-weight: 700; font-family: 'roboto thin', sans-serif; line-height: ${toRem(32)};`,
  bodyCloudDesc: `font-size: ${toRem(18)}; font-weight: 700; font-family: 'roboto thin', sans-serif; line-height: ${toRem(28)};`,
  bodyLarge: `font-size: ${toRem(16)}; font-weight: 700; font-family: 'roboto thin', sans-serif; line-height: ${toRem(24)};`,
  bodyMedium: `font-size: ${toRem(14)}; font-weight: 700; font-family: 'roboto thin', sans-serif;`,
  bodySmall: `font-size: ${toRem(12)}; font-weight: 700; font-family: 'roboto thin', sans-serif; line-height: ${toRem(16)};`,
};

export const breakpoints = {
  tablet: '1080px',
  desktop: '1920px',
};
