import { DefaultTheme } from "styled-components";

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string
      black: string;
      background: string;
    }
    fontStack: string;
  }
}

export const theme: DefaultTheme = {
  colors: {
    primary: '#FFFFA1;',
    secondary: '#E43D3C',
    black: '#111111',
    background: '#FAFCFF',
  },
  fontStack:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;',
};

export default theme