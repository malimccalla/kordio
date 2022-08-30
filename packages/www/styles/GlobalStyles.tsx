import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

const GlobalStyles = createGlobalStyle`
  * {
    border: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-family: ${theme.fontStack};
    font-size: inherit;
  }
  ul {
    list-style: none;
  }
  html {
    font-size: 62.5%;
    font-weight: normal;
    display: flex;
    min-height: 100%;
    width: 100%;
    box-sizing: border-box;
    background-color: ${theme.colors.black};
    color: ${theme.colors.black};
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-family: ${theme.fontStack};
     /* clears the 'X' from Internet Explorer */
    input[type=search]::-ms-clear {  display: none; width : 0; height: 0; }
    input[type=search]::-ms-reveal {  display: none; width : 0; height: 0; }
    /* clears the 'X' from Chrome */
    input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration { display: none; }
  }
  body {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    -webkit-overflow-scrolling: touch;
    font-family: ${theme.fontStack};
    font-size: 1.6rem;

    ::selection {
      background: ${theme.colors.pink}; /* WebKit/Blink Browsers */
    }   
    ::-moz-selection {
      background: ${theme.colors.pink}; /* Gecko Browsers */
    }
  }

  .ais-SearchBox-submit {
    display: none;
  }

  .ais-SearchBox-reset {
    display: none;
  }
`;

export default GlobalStyles;
