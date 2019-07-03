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
    color: rgba(0, 0, 0, 0.87);
  }
  
  /* other global styles go here */
`;

const theme = {
  primaryColor: '#BB1333',
  buttonColor: '#2C98F0',
  paperColor: '#ffffff',
  backgroundColor: '#efefef',
  primaryFontStack: `'Roboto', sans-serif`,
  primaryFontColor: 'rgba(0, 0, 0, 0.87)',
  secondaryFontStack: `'Roboto Mono', monospace`,
  radius: `0.4rem`,
  flatShadow: `none`,
  mainShadow: `0px 0px 4px rgba(0, 0, 0, 0.12)`,
  raisedShadow: `0px 0px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.25);`,
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
