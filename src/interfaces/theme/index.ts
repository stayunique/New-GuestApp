export type ThemeMode = 'light' | 'dark';

export interface Greys {
  0: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface Color {
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  contrastText: string;
}

export interface Palette {
  common: {
    black: string;
    white: string;
  };
  primary: Color;
  secondary: Color;
  info: Color;
  success: Color;
  warning: Color;
  error: Color;
  grey: Greys;
  divider: string;
  action: {
    hover: string;
    selected: string;
    disabled: string;
    disabledBackground: string;
    focus: string;
    hoverOpacity: number;
    disabledOpacity: number;
    active: string;
  };
  mode: ThemeMode;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  background: {
    paper: string;
    default: string;
    neutral: string;
  };
  borderOrange: string;
  borderGreen: string;
  linearDegreeOrange: string;
  linearDegreeGreen: string;
}

export type Shadows = string[];

export interface CustomShadows {
  z1: string;
  z4: string;
  z8: string;
  z12: string;
  z16: string;
  z20: string;
  z24: string;
  primary: string;
  info: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
  card: string;
  dialog: string;
  dropdown: string;
  customSmall: string;
  customMedium: string;
  customLarge: string;
}
