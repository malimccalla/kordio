import * as styledComponents from 'styled-components';

import { theme } from './theme';

const {
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  default: styled,
} = styledComponents;

export const truncate = (width: string): string => `
  width: ${width};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const breakpoints: Sizes = {
  // Large devices (Destops, less than 1200px)
  large: 1200,

  // Medium devices (tablets, less than 993px)
  medium: 993,

  // Small devices (landscape phones, less than 760px)
  small: 760,

  // Small devices (portrait phones, less than 576px)
  xsmall: 576,
};

export interface Sizes {
  large: number;
  medium: number;
  small: number;
  xsmall: number;
  [key: string]: number;
}

export const media: {
  large: styledComponents.ThemedCssFunction<styledComponents.DefaultTheme>;
  medium: styledComponents.ThemedCssFunction<styledComponents.DefaultTheme>;
  small: styledComponents.ThemedCssFunction<styledComponents.DefaultTheme>;
  xsmall: styledComponents.ThemedCssFunction<styledComponents.DefaultTheme>;
} = Object.keys(breakpoints).reduce((accumulator: any, label) => {
  const emSize = breakpoints[label] / 16;
  accumulator[label] = (...args: unknown[]) =>
    css`
      @media (max-width: ${emSize}em) {
        ${(css as any)(...args)};
      }
    `;

  return accumulator;
}, {});

export default styled;

export { css, keyframes, ThemeProvider, theme };
