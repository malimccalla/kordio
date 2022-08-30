import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      black: string;
      background: string;
      pink: string;
      blue: string;
    };
    fontStack: string;
  }
}

export const theme: DefaultTheme = {
  colors: {
    primary: '#11FAC7',
    secondary: '#FFFFA1',
    pink: '#FF15B4',
    black: '#111111',
    background: '#FAFCFF',
    blue: '#1596F5',
  },
  fontStack:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;',
};

export default theme;
