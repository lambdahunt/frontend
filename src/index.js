import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { ThemeProvider } from '@material-ui/styles';

import rootReducer from './reducers';
import App from './App';

// VARIABLES FOR THEMING AND GLOBAL STYLES
const primaryFonts = `'Roboto', sans-serif`;
const secondaryFonts = `'Roboto Mono', monospace`;
const appBackgroundColor = '#efefef';

const theme = {
  buttonColor: '#2C98F0',
  paperColor: '#ffffff',
  primaryFontStack: primaryFonts,
  secondaryFontStack: secondaryFonts,
};

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
