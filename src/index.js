import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

import App from './App';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    *, *:before, *:after {
      box-sizing: inherit;
      transition: inherit;
    }
  }

  body {
    background: #efefef;
    font: 100% 'Roboto', sans-serif;
  }
  
  /* other global styles go here */
`;

const theme = {
  primaryColor: '#BB1333',
  buttonColor: '#2C98F0',
  paperColor: '#ffffff',
  backgroundColor: '#efefef',
  primaryFontStack: `'Roboto', sans-serif`,
  secondaryFontStack: `'Roboto Mono', monospace`,
  radius: `0.4rem`,
  flatShadow: `none`,
  mainShadow: `0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)`,
  raisedShadow: `0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)`,
};

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <App />
      </>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
